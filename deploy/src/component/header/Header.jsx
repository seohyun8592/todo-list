import React from 'react';

export default function Header({ children }) {
  return (
    <header>
      <div className="header__wrap">{children}</div>
    </header>
  );
}
