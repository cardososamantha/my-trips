import styled from 'styled-components'

export const Wrapper = styled.main`
  background-image: linear-gradient(to top, #c33764 0%, #1d2671 80%);
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 6.4rem;
  margin: 2rem 0;
`

export const Description = styled.h2`
  font-size: 2.4rem;
  margin: 2rem 0;
`

export const Paragraph = styled.p`
  display: flex;
  font-size: 1.6rem;
  width: 60%;
`

export const Illustration = styled.img`
  width: min(30rem, 100%);
`
