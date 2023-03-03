import { Link } from "react-router-dom";
import { PRODUCT } from "../../graphql/products";

const ProductItem = ({ description, id, imageUrl, price, title }: PRODUCT) => (
  <div className="product-item-list">
    <Link to={`/products/${id}`}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <img src={imageUrl} alt="" />
      <div className="price">{price}</div>
    </Link>
  </div>
);

export default ProductItem;
