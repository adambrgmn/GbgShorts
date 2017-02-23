import { pages } from './db';

export default async function getPage(page) {
  const pageData = await pages.child(page).once('value');
  const data = pageData.val();

  return data;
}
