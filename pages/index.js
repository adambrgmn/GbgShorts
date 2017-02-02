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

  cloudinarySrc = n => `http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-${n}.jpg`

  render() {
    const imgs = [0, 1, null, 2, 3, 6];

    return (
      <Container bg="#d5c0c0">
        <Header pathname={this.props.url.pathname} />
        <Grid>
          {imgs.map((n, i) => (
            <GridColumn key={n == null ? 'text' : n}>
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
