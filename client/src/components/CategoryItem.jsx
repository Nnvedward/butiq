import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #f1f1f1;
        transform: scale(1.1)
    }
`

const CategoryItem = ({ category }) => {
    return (
        <Container>
            <Image src={category.image} />
            <Info>
                <Title>{category.name}</Title>
                <Link to={`/products/${category._id}`}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem