import { Link } from "react-router-dom";
import { Product } from "../../type";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => (
  <div className="product-item-list">
    <Link to={`/products/${id}`}>
      <div className="title">{title}</div>
      <div className="category">{category}</div>
      <div className="description">{description}</div>
      <img src={image} alt="" />
      <div className="price">{price}</div>
      <div className="rating">
        {rating.rate}: {rating.count}
      </div>
    </Link>
  </div>
);

export default ProductItem;
