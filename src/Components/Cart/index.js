import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Items from '../Items';

import { Body, Box, Footer, Header } from './styles';
import Total from './Total';

function Cart({isVisible, dataItems, totalCart}) {
  return (
    <Box style={{'display' : isVisible ? 'block' : 'none'}}>
      <Header>Meu carrinho</Header>
      <Body>
        {
          dataItems.map(item => {
            return (
              <Items
                key={item.id}
                image={item.imageUrl}
                title={item.name}
                old={item.listPrice}
                price={item.sellingPrice}
              />
            )
          })
        }

      </Body>
      <Total total={totalCart} />
      <Footer>
        <Button>Finalizar compra</Button>
      </Footer>
    </Box>
  )
}

export default Cart;

