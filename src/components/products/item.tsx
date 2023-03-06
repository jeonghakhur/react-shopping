import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoil/cart";
import { useRecoilState, useRecoilValue } from "recoil";

const ProductItem = ({ description, id, imageUrl, price, title }: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <img src={imageUrl} alt="" />
        <div className="price">{price}</div>
      </Link>
      <button type="button" onClick={addToCart}>
        담기
      </button>
      <span>{cartAmount || 0}</span>
    </div>
  );
};

export default ProductItem;
