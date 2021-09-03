import { MoneyFormatter } from '../../helpers/money'
import { StyledTotal, FreeDelivery } from './styles'


function Total({ total }) {
  return (
    <>
      <StyledTotal>
        <div>Total</div>
        <div>{MoneyFormatter(total)}</div>
      </StyledTotal>
      {total >= 1000 && (<FreeDelivery>Parabéns, sua compra tem frete grátis!</FreeDelivery>)}
    </>
  )
}

export default Total