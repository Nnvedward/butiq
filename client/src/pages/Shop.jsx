import { useEffect, useState } from 'react'
import styled from "styled-components"
// import { categories } from '../data'
import CategoryItem from "../components/CategoryItem"
import { mobile } from "../responsive"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import {publicRequest} from '../requestMethods'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

const Shop = () => {
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
        <div>
            <Navbar />
            <Announcement />
            <Container>
                {categories.map(category => (
                    <CategoryItem category={category} key={category._id} />
                ))}
            </Container>
            <Footer />
        </div>
    )
}

export default Shop