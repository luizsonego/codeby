import React from 'react';
import Button from '../Button';
import Empty from '../Empty';
import Items from '../Items';

import { Body, Box, Footer, Header } from './styles';
import Total from './Total';

function Cart({ isVisible, dataItems, totalCart }) {
  console.log(dataItems)
  return (
    <Box style={{ 'display': isVisible ? 'block' : 'none' }}>
      <Header>Meu carrinho</Header>
      <Body>
        {
          dataItems.length === 0 ? (<Empty />) : (
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
          )
        }

      </Body>
      {
        dataItems.length !== 0 && (
          <>
            <Total total={totalCart} />
            <Footer>
              <Button>Finalizar compra</Button>
            </Footer>
          </>
        )
      }

    </Box>
  )
}

export default Cart;

