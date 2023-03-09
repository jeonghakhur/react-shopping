import { graphql } from "msw";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";
import { GET_CART, ADD_CART, CartType } from "../graphql/cart";

const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: 1 + i + "",
    imageUrl: `http://placeimg.com/640/480/${i + 1}`,
    price: 5000,
    title: `임시상품${i + 1}`,
    description: `임시상세내용${i + 1}`,
    createAt: new Date(1677829449900 + i * 1000 * 60 * 60 * 1).toString(),
  })))();

let cartData: { [key: string]: CartType } = {};

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mockProducts.find((item) => item.id === req.variables.id);
    if (found) return res(ctx.data(found));
    return res();
  }),
  graphql.query(GET_CART, (req, res, ctx) => {
    return res(ctx.data(cartData));
  }),
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const newCartData = { ...cartData };
    const id = req.variables.id;
    const targetProduct = mockProducts.find(
      (item) => item.id === req.variables.id
    );

    if (!targetProduct) {
      throw new Error("상품이 없습니다");
    }

    const newItem = {
      ...targetProduct,
      amount: (newCartData[id]?.amount || 0) + 1,
    };
    newCartData[id] = newItem;
    cartData = newCartData;
    console.log(cartData);
    return res(ctx.data(newItem));
  }),
];
