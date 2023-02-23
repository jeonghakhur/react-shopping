import { useQuery } from "react-query";
import ProductItem from "../../components/products/item";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../type";

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <>
      {data?.map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </>
  );
};

export default ProductList;
