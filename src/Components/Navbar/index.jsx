import React, { useState } from 'react';
import Switch from '../Switch';

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