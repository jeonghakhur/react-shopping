import { notifyManager } from "react-query";
import { Product } from "../../graphql/products";

const ProductItemDetail = ({
  item: { description, imageUrl, price, title },
}: {
  item: Product;
}) => {
  return (
    <div className="product-item-detail">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <img src={imageUrl} alt="" />
      <div className="price">{price}</div>
    </div>
  );
};

export default ProductItemDetail;
