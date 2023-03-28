import { ForwardedRef, forwardRef, SyntheticEvent } from "react";
import { UPDATE_CART, CartType, DELETE_CART } from "../../graphql/cart";
import { useMutation } from "react-query";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType, ref: ForwardedRef<HTMLInputElement>) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART);
        const prevCart = queryClient.getQueryData<{ [key: string]: CartType }>(
          QueryKeys.CART
        );
        if (!prevCart?.[id]) return prevCart;

        const newCart = {
          ...(prevCart || {}),
          [id]: { ...prevCart[id], amount },
        };

        queryClient.setQueryData(QueryKeys.CART, newCart);
        return prevCart;
      },
      onSuccess: (newValue: any) => {
        const prevCart = queryClient.getQueryData<{[key: string]: CartType}>(QueryKeys.CART)
        const newCart = {
          ...(prevCart || {}),
          [id]: newValue
        }
        queryClient.setQueryData(QueryKeys.CART, newCart)
      }
    }
  );

  const { mutate: deleteCart } = useMutation(
    ({id} : {id: string}) => graphqlFetcher(DELETE_CART, {id}), {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART)
      }
    }
  )
  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({id})
  }
  return (
    <>
      <li className="cart-items">
        <input type="checkbox" name={`select-item`} className="cart-item__checkbox" ref={ref} data-id={id} />
        <img src={imageUrl} style={{ height: "100px" }} />
        <p>{title}</p>
        <p>{price}</p>
        <input type="number" min="1" value={amount} onChange={handleUpdateAmount} />
        <button type="button" onClick={handleDeleteItem}>Delete</button>
      </li>
    </>
  );
};

export default forwardRef(CartItem)
