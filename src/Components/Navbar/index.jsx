import React from 'react';

import { StyledNavBar, IconCart } from './styles';

function Navbar({ handleClickCartButton, children }) {

  return (
    <StyledNavBar>
      {children}
      <IconCart onClick={handleClickCartButton}>&#128717;</IconCart>
    </StyledNavBar>
  )
}

export default Navbar;