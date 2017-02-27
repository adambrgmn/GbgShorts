import React, { Component, PropTypes } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import { Grid, GridColumn } from '../components/Grid';
import WelcomeSection from '../components/WelcomeSection';
import Img from '../components/Img';
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

  state = { imgs: ['gbgshorts-1.jpg', '59.jpg', null] }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
    this.addImages();
  }

  addImages = () => this.setState(({ imgs }) => ({ imgs: [...imgs, '6.jpg', '6-streck.png', 'gbgshorts-2.jpg', 'gs_webb_04.jpg', 'gbgshorts-3.jpg', 'gbgshorts-5.jpg'] }));
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
                : <Img src={this.cloudinarySrc(n)} />
              }
            </GridColumn>
          ))}
        </Grid>
      </Container>
    );
  }
}
