import styled from "styled-components"
 import { publicRequest } from '../requestMethods'
import CategoryItem from "./CategoryItem"
import { mobile } from "../responsive"
import { useEffect, useState } from "react"


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

const Categories = () => {
  const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await publicRequest.get('category')
                setCategories(res.data.data)
            } catch {}
        }
        getCategories()
    },[categories])
  return (
    <Container>
        {categories.slice(0,3).map(category => (
            <CategoryItem category={category} key={category._id} />
        ))}
    </Container>
  )
}

export default Categories