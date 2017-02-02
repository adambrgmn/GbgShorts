import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Container';
import { Content, Items } from '../components/Content';
import { LogotypeCurly } from '../components/Icons';
import Img from '../components/Img';
import { media } from '../style/utils';

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

const Imgs = styled(Img)`
  width: 65%;
  height: auto;
  filter: grayscale(50%);

  &:nth-child(1) { margin-top: 0%; margin-left: 17.5%; }
  &:nth-child(2) { margin-top: -5%; margin-left: 0; }
  &:nth-child(3) { margin-top: -60%; margin-left: 30%; width: 70%; }
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

export default class Information extends Component {
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
      <Container bg="#dcddde">
        <Header pathname={this.props.url.pathname} title="Information" />
        <Content>
          <Items order="3" basis="70">
            <LogotypeCurly />
          </Items>
          <Items order="1">
            <ImgContainer>
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-1.jpg" />
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-6.jpg" />
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-5.jpg" />
            </ImgContainer>
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
