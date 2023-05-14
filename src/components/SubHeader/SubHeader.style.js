import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 194px auto;

  /* @media screen and (min-width: 1280px) {
    flex-basis: 50%;
    padding: 0;
    z-index: 1;
    width: 100%;
  } */
`

export const HeaderWrap = styled.div`
  text-align: center;
  flex-basis: 50%;
  padding: 0;
  z-index: 1;
  width: 100%;
  @media screen and (min-width: 960px) {
    max-width: calc(100% - 4rem);
  }
`
export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: 900;

  /* @media screen and (min-width: 960px) {
    font-size: 3rem;
    font-weight: 900;
  }

  @media screen and (min-width: 1280px) {
  } */
`
export const P1 = styled.p`
  margin: 16px 0 0;
  font-size: 1.5rem;
  font-weight: 400;
`
export const P2 = styled.p`
  margin: 24px 0 0;
  font-size: 1.25rem;
  font-weight: 400;
`

export const Form = styled.form`
  margin: 16px 0 0;
  width: 100%;
  max-width: 36.625rem;
  height: 54px;
  min-width: 12.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
export const Input = styled.input`
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid rgba(128, 128, 128, 0.7);
  background: rgba(22, 22, 22, 0.7);
  font-size: 1rem;
`