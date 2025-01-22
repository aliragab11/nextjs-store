import React, { Suspense } from 'react';
import Container from '../global/Container';
import Logo from './Logo';
import NavSearch from './NavSearch';
import CartButton from './CartButton';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap py-8 gap-4 sm:flex-row sm:justify-between sm:items-center">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
