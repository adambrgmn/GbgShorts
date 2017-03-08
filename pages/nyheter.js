import React, { Component, PropTypes } from 'react';

import getNews from '../lib/getNews';

import Header from '../components/Header';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { trackPageView } from '../lib/ga';

export default class Nyheter extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    data: PropTypes.any.isRequired, // eslint-disable-line
  }

  static async getInitialProps() {
    const data = await getNews();
    return { data };
  }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
  }

  render() {
    const { data } = this.props;

    return (
      <Container>
        <Header pathname={this.props.url.pathname} title="Nyheter" />
        {data.map(item => <BlogPost key={item.key} item={item} />)}
      </Container>
    );
  }
}
