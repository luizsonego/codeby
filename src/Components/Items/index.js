import React from 'react';
import { MoneyFormatter } from '../../helpers/money';
import { TitleItem } from './styles';

import { Container, ImageItem, OldPriceItem, NewPriceItem } from './styles';

function Items({ image, title, price, old }) {
  return (
    <Container>
      <ImageItem src={image} />
      <div>
        <TitleItem>{title}</TitleItem>
        <OldPriceItem>{MoneyFormatter(old)}</OldPriceItem>
        <NewPriceItem>{MoneyFormatter(price)}</NewPriceItem>
      </div>
    </Container>
  )
}

export default Items;