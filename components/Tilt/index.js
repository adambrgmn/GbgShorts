// @flow
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

const TiltedDiv = styled.div`
  transform:
    perspective(50rem)
    rotateY(${R.prop('rotateY')}deg)
    rotateX(${R.prop('rotateX')}deg);
  transition: transform 0.5s ease-in-out;
`;

type Props = {
  children?: any, // eslint-disable-line
}

export default class Tilt extends React.Component {
  props: Props;
  state: { rotateY: number, rotateX: number }

  constructor(props: Props) {
    super(props);
    this.state = { rotateY: 0, rotateX: 0 };
  }

  componentDidMount(): void {
    window.addEventListener('mousemove', this.tiltMouse);
  }

  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.tiltMouse);
  }

  tiltMouse = (e: MouseEvent): void => {
    const getDeg = (axis: 'x' | 'y'): number => {
      const isX = axis === 'x';
      const page = isX ? 'Y' : 'X';
      const point = R.prop(`page${page}`, e);
      const windowDim = window[isX ? 'innerHeight' : 'innerWidth'];

      const middle = windowDim / 2;
      const fromMiddle = point - middle;
      const percent = fromMiddle / middle;

      const max = isX ? -10 : 10;

      return max * percent;
    };

    window.requestAnimationFrame(() => {
      this.setState({
        rotateY: getDeg('y'),
        rotateX: getDeg('x'),
      });
    });
  }

  render() {
    const { children } = this.props;
    const { rotateY, rotateX } = this.state;

    return (
      <TiltedDiv rotateY={rotateY} rotateX={rotateX}>{children}</TiltedDiv>
    );
  }
}
