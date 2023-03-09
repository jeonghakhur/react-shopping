import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";

const ProductItem = ({ description, id, imageUrl, price, title }: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <img src={imageUrl} alt="" />
        <div className="price">{price}</div>
      </Link>
      <button onClick={() => addCart(id)}>담기</button>
    </div>
  );
};

export default ProductItem;
