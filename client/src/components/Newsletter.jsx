import {  faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf1ed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ height: "40vh" })}
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "50px" })}
`


const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center", fontWeight: "200" })}
`


const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "70%" })}
`


const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`


const Button = styled.button`
    flex: 0.5;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter