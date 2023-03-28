import { useQuery } from "react-query";
import ProductList from "../../components/products/list";
import GET_PRODUCTS, { Products } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const ProductListPage = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))

  return (
    <div className="product-item-list">
      <ProductList list={data?.products || []} />
    </div>
  );
};

export default ProductListPage;
