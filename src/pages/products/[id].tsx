import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductItemDetail from "../../components/products/detail";
import { QueryKeys, fetcher } from "../../queryClient";
import { Product } from "../../type";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;
  console.log(data);

  return <ProductItemDetail item={data} />;
};

export default ProductDetail;
