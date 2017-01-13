// @flow
import React from 'react';
import R from 'ramda';
import requestAnimationFrame from '../../utils/requestAnimationFrame';

const getDeg = (
  axis: 'x' | 'y',
  event: MouseEvent,
  maxRotation: number = 10,
): number => {
  const isX = axis === 'x';
  const page = isX ? 'Y' : 'X';
  const point = R.prop(`page${page}`, event);
  const windowDim = window[isX ? 'innerHeight' : 'innerWidth'];

  const middle = windowDim / 2;
  const fromMiddle = point - middle;
  const percent = fromMiddle / middle;

  const max = isX ? -maxRotation : maxRotation;

  return max * percent;
};

type Props = {
  children?: any,
}

export default class Tilt extends React.Component {
  props: Props;
  state: { rotateY: number, rotateX: number }
  static defaultProps: Props;

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
    try {
      requestAnimationFrame(() => {
        this.setState({
          rotateY: getDeg('y', e, 5),
          rotateX: getDeg('x', e, 5),
        });
      });
    } catch (err) {
      window.removeEventListener('mousemove', this.tiltMouse);
    }
  }

  render() {
    const { children } = this.props;
    const { rotateY, rotateX } = this.state;

    const style = {
      transform: `perspective(50rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.3s ease-in-out',
    };

    return (
      <div style={style}>{children}</div>
    );
  }
}

Tilt.defaultProps = {
  children: null,
};
