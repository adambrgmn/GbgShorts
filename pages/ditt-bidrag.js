/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Container';
import Img from '../components/Img';
import { Content, Items } from '../components/Content';
import { BottomBorder } from '../components/Typography';
import { media } from '../style/utils';

const Title = styled.h1`
  position: relative;
  display: block;
  font-size: 2.5rem;
  font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed', 'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed', 'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold', 'HelveticaNeue', 'Helvetica Neue', 'TeXGyreHerosCnBold', 'Helvetica', 'Tahoma', 'Geneva', 'Arial Narrow', 'Arial', sans-serif;
  font-weight: 600;
  font-stretch: condensed;
  text-align: center;
  text-transform: uppercase;

  ${media.large`
    margin: 1rem 0 0 0;
    font-size: 4rem;
  `}
`;

const Text = styled.p`
  font-family: Gill Sans, Lato, sans-serif;
  margin-bottom: 1rem;
  padding: 0 1.5rem;

  &:last-child { margin-bottom: 0; padding-bottom: 1rem; }

  ${media.large`
    padding: 0;
    &:first-child { padding-top: 5rem; }
  `}
`;

export default class DittBidrag extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {};
  }

  render() {
    return (
      <Container bg="rgb(136, 122, 143)">
        <Header pathname={this.props.url.pathname} title="Ditt bidrag" />
        <Content>
          <Items order="3">
            <Title>
              <BottomBorder>Ditt bidrag</BottomBorder>
            </Title>
          </Items>

          <Items order="1">
            <Img src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-2.jpg" />
          </Items>

          <Items order="2">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Illud dico, ea, quae dicat, praeclare inter se cohaerere. Nihil opus est exemplis hoc facere longius. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Erat enim Polemonis. Duo Reges: constructio interrete. Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Collige omnia, quae soletis: Praesidium amicorum. Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit. Hanc quoque iucunditatem, si vis, transfer in animum; </Text>
            <Text>Et non ex maxima parte de tota iudicabis? Quae quo sunt excelsiores, eo dant clariora indicia naturae. Vitiosum est enim in dividendo partem in genere numerare. Non est igitur voluptas bonum. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Primum Theophrasti, Strato, physicum se voluit; </Text>
            <Text>Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare? Utilitatis causa amicitia est quaesita. </Text>
          </Items>
        </Content>
      </Container>
    );
  }
}
