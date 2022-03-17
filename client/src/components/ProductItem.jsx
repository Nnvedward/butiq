import { faCartShopping, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0fafd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 75%;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`

const ProductItem = ({ product }) => {
  return (
    <Container>
        <Image src={product.img}/>
        <Info>
            <Icon>
                <FontAwesomeIcon icon={faCartShopping} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faSearch} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faHeart} />
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem