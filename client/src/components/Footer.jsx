import {  faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter,faPinterest  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    margin-right: 20px;
`
 
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })};
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
    height: 40px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BUTIQ.</Logo>
                <Description>
                    There are many variations of Lorem Ipsum available, but the majority have suffered alternation in some fprm, by injection humor, or randomised words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <FontAwesomeIcon icon={faPinterest} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faLocationDot}/> Enugu, Nigeria</ContactItem>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faPhone}/> +234 816 457 8471</ContactItem>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faEnvelope}/> nnvedward@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/s1N33LP/payment.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer
