import { useEffect, useState } from "react"
import styled from "styled-components"
import ProductItem from "./ProductItem"
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `http://localhost:4000/api/item?category=${category}` : "http://localhost:4000/api/item"
        )
        console.log(res.data)
        setProducts(res.data.data)
      } catch (e) { }
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category && setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, category, filters])

  return (
    <Container>
      {filteredProducts.map(product => (
        <ProductItem product={product} key={product._id} />
      ))}
    </Container>
  )
}

export default Products