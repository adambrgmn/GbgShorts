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

  state = { imgs: ['gbgshorts-1', '59', null] }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
    this.addImages();
  }

  addImages = () => this.setState(({ imgs }) => ({ imgs: [...imgs, '6', 'sex-streck', 'gbgshorts-2', 'gs_webb_04', 'gbgshorts-3', 'gbgshorts-5'] }));
  cloudinarySrc = img => `https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_720,w_1100/v1485974209/gbgshorts/${img}`

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
