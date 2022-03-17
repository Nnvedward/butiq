import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0fafd;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: #f0fafd;
    ${mobile({ width: "80%" })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
`
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <LinkContainer>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link>SIGN UP</Link>
                    </LinkContainer>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login