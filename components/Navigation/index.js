import React, { Component, PropTypes } from 'react';
import styled, { css } from 'styled-components';
import Link from '../Link';

import { media } from '../../style/utils';

const navButtonHeight = '1.75rem';
const transitionDur = 0.5;
const transitionDelay = 0.05;

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: ${() => navButtonHeight};
  height: ${() => navButtonHeight};
  background: none;
  z-index: 1;

  ${media.large`
    position: initial;
    top: auto;
    left: auto;
    width: auto;
    height: auto;
    padding-top: 0.5rem;
  `}
`;

const ShowNavigationButton = styled.button`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  text-indent: -9999px;
  color: transparent;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;

  &:focus { outline: none; }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #000000;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: all ${() => transitionDur}s ease-in-out;
  }

  &::before {
    transform: ${({ open }) => (open
      ? 'rotate(45deg)'
      : 'rotate(0deg)')};
  }
  &::after {
    transform: ${({ open }) => (open
      ? 'rotate(-45deg)'
      : 'rotate(0deg)')};
  }

  ${media.large`
    display: none;
  `}
`;

const Nav = styled.nav`
  position: absolute;
  top: ${({ open }) => (open ? 2.75 : 0)}rem;
  ${''/* left: ${({ open }) => (open ? -1 : 0)}rem; */}
  left: -1rem;
  padding: ${({ open }) => (open
    ? '2rem'
    : '0.2rem 1rem 0.2rem 1rem'
  )};
  background-color: ${({ open }) => (open ? '#ffffff' : 'transparent')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: all ${() => transitionDur}s ease-in-out;
  z-index: 1;

  ${media.large`
    position: initial;
    top: auto;
    left: auto;
    padding: 0;
    background-color: none;
    pointer-events: auto;
    font-size: 0.7rem;
    line-height: 0.8rem;
  `}
`;

const NavItem = styled(Link)`
  position: relative;
  display: inline-block;
  margin-top: ${({ open }) => (open ? 1 : 0.3)}rem;
  float: left;
  clear: both;
  white-space: nowrap;
  font-size: ${({ open }) => (open ? 0.75 : 0.25)}rem;
  font-weight: 600;
  line-height: ${({ open }) => (open ? 0.75 : 0.25)}rem;
  text-transform: uppercase;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  letter-spacing: ${({ open }) => (open ? 2 : 0)}px;
  color: ${({ open }) => (open ? '#000000' : 'transparent')};
  opacity: ${({ index, open }) => (index < 3 || open ? 1 : 0)};
  visibility: ${({ index, open }) => (index < 3 || open ? 'visibile' : 'hidden')};
  transition: all ${() => transitionDur}s ease-in-out;
  transition-delay: ${({ index }) => (index + 1) * transitionDelay}s;

  &:hover { text-decoration: underline; }

  &:first-child { margin-top: 0; }

  ${({ index }) => index < 3 && css`
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #000000;
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: all ${() => transitionDur / 2}s ease-in-out;
      transition-delay: ${({ open }) => (open ? 0 : transitionDur / 2)}s;
    }
  `}

  ${media.large`
    position: relative;
    margin: 0 0.5rem;
    float: none;
    clear: none;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: 1px;
    opacity: 1;
    visibility: visible;
    color: #000000;

    &::before {
      content: none;
    }
  `}
`;

export default class Navigation extends Component {
  static defaultProps = { pathname: '/' }
  static propTypes = { pathname: PropTypes.string }

  state = { open: false }

  onClick = () => this.setState(({ open }) => ({ open: !open }))

  render() {
    const { open } = this.state;
    const { pathname } = this.props;

    const navItems = [
      { title: 'Nyheter', href: '/nyheter' },
      { title: 'Ditt bidrag', href: '/ditt-bidrag' },
      { title: 'Information', href: '/information' },
      { title: 'Biljetter', href: '/biljetter' },
    ];

    return (
      <Container>
        <ShowNavigationButton
          onClick={this.onClick}
          open={open}
        >
          {open ? 'Hide' : 'Show'} navigation
        </ShowNavigationButton>

        <Nav open={open}>
          {navItems.map((item, i) => (
            <NavItem
              href={item.href}
              key={item.title}
              index={i}
              open={open}
              active={item.href === pathname}
            >
              {item.title}
            </NavItem>
          ))}
        </Nav>
      </Container>
    );
  }
}
