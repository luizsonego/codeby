export const MoneyFormatter = (intValue) => {
  return (
    new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format((intValue / 100))
  )
}