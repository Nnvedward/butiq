import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over $40
    </Container>
  )
}

export default Announcement