import { useQuery } from "react-query";
import { QueryKeys, graphqlFetcher } from "../../queryClient";
import { GET_CART } from "../../graphql/cart";
import CartList from "../../components/carts";
import { CartType } from "../../graphql/cart";

const Cart = () => {
  const { data } = useQuery<any>(
    QueryKeys.CART,
    () => graphqlFetcher(GET_CART),
    {
      staleTime: 0,
      cacheTime: 1000,
    }
  );

  const items = Object.values(data || {}) as CartType[];
  if (!items.length) return <div>장바구니가 비었어요!</div>;

  return <CartList items={items} />;
};

export default Cart;
