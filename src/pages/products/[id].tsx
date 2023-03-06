import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductItemDetail from "../../components/products/detail";
import { QueryKeys, graphqlFetcher } from "../../queryClient";
import { GET_PRODUCT, Product } from "../../graphql/products";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery([QueryKeys.PRODUCTS, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;
  console.log(data);

  return <ProductItemDetail item={data} />;
};

export default ProductDetail;
