import React, { PropTypes } from 'react';
import Link from 'next/link';

export default function ExtendedLink({ href, className, children }) {
  return (
    <Link href={href}><a className={className}>{children}</a></Link>
  );
}

ExtendedLink.defaultProps = {
  className: '',
};

ExtendedLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
