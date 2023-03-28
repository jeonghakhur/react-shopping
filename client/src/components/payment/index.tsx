import WillPay from "../willPay"
import PaymentModal from "./modal"
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedCartState } from '../../recoil/cart';
import { useMutation } from 'react-query';
import { graphqlFetcher } from '../../queryClient';
import { EXECUTE_PAY } from "../../graphql/payment";
import { useNavigate } from 'react-router-dom';

type PayInfo = string[]

const Payment= () => {
  const navigate = useNavigate()
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState)
  const [modalShown, setModalShown] = useState(false)
  const { mutate: executePay} = useMutation((payInfos: PayInfo) => 
    graphqlFetcher(EXECUTE_PAY, payInfos)
  )

  const showModal = () => {
    setModalShown(true)
  }

  const proceed = () => {
    const payInfo = checkedCartData.map(({id}) => id)
    executePay(payInfo)
    setCheckedCartData([])
    navigate('/products', {replace: true})
  }

  const cancel = () => {
    setModalShown(false)
  }

  return (
    <div>
      <WillPay submitTitle="결제하기" handleSubmit={showModal} />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  )
}

export default Payment