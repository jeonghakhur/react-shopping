import { Link } from "react-router-dom";

const Gnb = () => (
  <div className="container-gnb">
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/products">상품목록</Link>
      </li>
      <li>
        <Link to="/cart">장바구니</Link>
      </li>
      <li>
        <Link to="/payment">결제목록</Link>
      </li>
    </ul>
  </div>
);

export default Gnb;
