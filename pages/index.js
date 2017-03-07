import React, { Component, PropTypes } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import { Grid, GridColumn } from '../components/Grid';
import WelcomeSection from '../components/WelcomeSection';
import CloudinaryImg from '../components/CloudinaryImg';
import { trackPageView } from '../lib/ga';


export default class Index extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {};
  }

  state = { imgs: ['gbgshorts-1', 'johan-stahre', null] }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
    this.addImages();
  }

  addImages = () => this.setState(({ imgs }) => ({ imgs: [...imgs, '6', 'sex-streck', 'gbgshorts-2', 'gbgshorts-3', '2_o7xa0v', 'gbgshorts-5'] }));

  render() {
    return (
      <Container bg="#d5c0c0">
        <Header pathname={this.props.url.pathname} />
        <Grid>
          {this.state.imgs.map((n, i) => (
            <GridColumn key={n == null ? 'text' : n + i}>
              {i === 2
                ? <WelcomeSection />
                : <CloudinaryImg img={n} ext="jpg" transformations="" />
              }
            </GridColumn>
          ))}
        </Grid>
      </Container>
    );
  }
}
