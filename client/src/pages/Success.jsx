import React from 'react'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 80vh;
`

const Icon = styled.span`
  font-size: 60px;
`

const Message = styled.span`
  font-size: 30px;
  font-weight: bold;
`
const Button = styled.button`
    width: 60px;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Icon>
          <FontAwesomeIcon icon={faCircleCheck} />
        </Icon>
        <Message>Transaction Successful</Message>
        <Link to="/cart">
          <Button>Ok</Button>
        </Link>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Success