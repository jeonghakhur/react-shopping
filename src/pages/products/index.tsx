import { useQuery } from "react-query";
import ProductItem from "../../components/products/item";
import GET_PRODUCTS, { Products } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div className="product-item-list">
      {data?.products?.map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
