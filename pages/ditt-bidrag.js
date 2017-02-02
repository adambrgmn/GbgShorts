import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Container';
import Img from '../components/Img';
import { media } from '../style/utils';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;

  ${media.large`
    width: 90%;
    padding: 0;
  `}
`;

const Items = styled.div`
  flex-basis: 100%;
  padding: 0;
  margin-bottom: 1.5rem;

  ${media.large`
    flex-basis: 50%;
    margin-bottom: 0rem;
    padding: 0 2rem;
  `}
`;


const TitleContainer = styled(Items)`
  text-align: center;

  ${media.large`
    order: 3;
    margin-top: 2rem;
  `}
`;

const Title = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed', 'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed', 'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold', 'HelveticaNeue', 'Helvetica Neue', 'TeXGyreHerosCnBold', 'Helvetica', 'Tahoma', 'Geneva', 'Arial Narrow', 'Arial', sans-serif;
  font-weight: 600;
  font-stretch: condensed;
  text-transform: uppercase;

  ${media.large`
    font-size: 4rem;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 3px;
    background: currentColor;
  }
`;

const Image = styled(Items)`
  ${media.large`
    order: 1;
  `}
`;

const Text = styled(Items)`
  font-family: Gill Sans, Lato, sans-serif;
  padding: 0 1rem;

  ${media.large`
    padding: 0;
    padding-top: 5rem;
    order: 2
  `}

  & > p { margin-bottom: 1rem; }
  & > p:last-child { margin-bottom: 0; }
`;

export default class DittBidrag extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return {};
  }

  render() {
    return (
      <Container bg="rgb(136, 122, 143)">
        <Header pathname={this.props.url.pathname} />
        <Content>
          <TitleContainer>
            <Title>Ditt bidrag</Title>
          </TitleContainer>

          <Image>
            <Img src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-2.jpg" />
          </Image>

          <Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Illud dico, ea, quae dicat, praeclare inter se cohaerere. Nihil opus est exemplis hoc facere longius. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Erat enim Polemonis. Duo Reges: constructio interrete. Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Collige omnia, quae soletis: Praesidium amicorum. Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit. Hanc quoque iucunditatem, si vis, transfer in animum; </p>
            <p>Et non ex maxima parte de tota iudicabis? Quae quo sunt excelsiores, eo dant clariora indicia naturae. Vitiosum est enim in dividendo partem in genere numerare. Non est igitur voluptas bonum. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Primum Theophrasti, Strato, physicum se voluit; </p>
            <p>Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare? Utilitatis causa amicitia est quaesita. </p>
          </Text>
        </Content>
      </Container>
    );
  }
}
