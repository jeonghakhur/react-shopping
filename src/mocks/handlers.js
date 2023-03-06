import { graphql } from 'msw'
import GET_PRODUCTS, {GET_PRODUCT} from '../graphql/products'
import { v4 as uuidv4 } from 'uuid'

const mock_products = Array.from({length: 20}).map((_, i) => ({
  id: uuidv4(),
  imageUrl: `http://placeimg.com/640/480/${i+1}`,
  price: 5000,
  title: `임시상품${i+1}`,
  description: `임시상세내용${i+1}`,
  createAt: new Date(1677829449900+(i*1000*60*60*1)).toString()
}))

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx)  => {
    return res(
      ctx.data({
        products: mock_products
      })
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx)  => {
    console.log(req)
    // return res()
    return res(
      ctx.data(mock_products.find(product => product.id === req.variables.id))
    )
  }),
]