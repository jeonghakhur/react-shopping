import { Product } from "../../type";

const ProductItemDetail = ({
  item: { category, description, image, price, rating, title },
}: {
  item: Product;
}) => {
  return (
    <div className="product-item-detail">
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
};

export default ProductItemDetail;
