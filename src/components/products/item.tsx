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
    <div className="title">{title}</div>
    <div className="category">{category}</div>
    <div className="description">{description}</div>
    <img src={image} alt="" />
    <div className="price">{price}</div>
    <div className="rating">
      {rating.rate}: {rating.count}
    </div>
  </div>
);

export default ProductItem;
