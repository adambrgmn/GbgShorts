import { compose, keys, filter, prop, __, reverse, sortBy, path, map } from 'ramda';
import { posts } from './db';

async function getPublishedKeys(ref) {
  const snapshot = await ref.once('value');
  const val = snapshot.val();
  const allKeys = keys(val);
  const publishedKeys = filter(prop(__, val), allKeys);

  return publishedKeys;
}

async function getPostByKey(key) {
  const snapshot = await posts.child(`posts/${key}`).once('value');
  return snapshot.val();
}

const sortByPublishedAt = compose(reverse, sortBy(path(['meta', 'publishedAt'])));

export default async function getNews() {
  const publishedRef = posts.child('published');
  const publishedKeys = await getPublishedKeys(publishedRef);

  const publishedPosts = await Promise.all(map(getPostByKey, publishedKeys));
  const sortedPosts = sortByPublishedAt(publishedPosts);

  return sortedPosts;
}
