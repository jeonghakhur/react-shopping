import { SyntheticEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { checkedCartState } from '../../recoil/cart';

const WillPay = ({submitTitle, handleSubmit}: {submitTitle: string, handleSubmit: (e: SyntheticEvent) => void}) =>  {
  const checkedItems = useRecoilValue(checkedCartState)
  const totalPrice = checkedItems.reduce((res, {price, amount}) => {
    res += price * amount
    return res
  }, 0)

  return (
    <div className="cart-willpay">
      <ul>
        {checkedItems.map(({imageUrl, price, title, amount, id}) => (
          <li key={id}>
            <img src={imageUrl} style={{ height: "100px" }} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{amount}</p>
            <p>금액: {price * amount}</p>
          </li>
        ))}
      </ul>
      <p>총예상결재액: {totalPrice}</p>
      <button type="button" onClick={handleSubmit}>{submitTitle}</button>
    </div>
  )
}

export default WillPay