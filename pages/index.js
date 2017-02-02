import React, { Component, PropTypes } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import { Grid, GridColumn } from '../components/Grid';
import WelcomeSection from '../components/WelcomeSection';
import Img from '../components/Img';


export default class Index extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {};
  }

  state = { imgs: [0, 1, null] }

  componentDidMount() {
    this.addImages();
  }

  addImages = () => this.setState(({ imgs }) => ({ imgs: [...imgs, 2, 3, 6, 0, 1, 2, 3, 4, 2] }));
  cloudinarySrc = n => `http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-${n}.jpg`

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
