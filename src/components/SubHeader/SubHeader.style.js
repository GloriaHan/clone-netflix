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
  text-align: center;
  margin: 16px auto 0;
  width: 100%;
  max-width: 36.625rem;
  height: 54px;
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid rgb(229, 9, 20);
  background: rgba(22, 22, 22, 0.7);
  font-size: 1rem;
  min-width: 12.5rem;
  font-weight: 400;
  width: 100%;
  color: white;
  padding-left: 1rem;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  &:focus  {
    outline: rgb(255, 255, 255) solid 0.125rem;
    outline-offset: 0.125rem;
    border-color: rgb(229, 9, 20);

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.75rem;
      transform: translateY(-125%) translateX(0.5rem);
      transition: all 0.2s ease-in-out;
      text-align: left;
    }
   
  }
`
export const Button = styled.button`
  flex: 0 0 auto;
  margin-top: 0;
  margin-left: 0.5rem;
  text-decoration: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 0.25rem;
  cursor: pointer;
  fill: currentcolor;
  position: relative;
  transition-duration: 250ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  vertical-align: text-top;
  width: auto;
  font-size: 1.5rem;
  font-weight: 500;
  min-height: 3.5rem;
  padding: 0.75rem 1.5rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  border: none;
  display: flex;
  align-items: center;

  &::after {
    inset: 0px;
    position: absolute;
    transition: inherit;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: 0.1875rem;
    content: none;
    border-color: rgba(128, 128, 128, 0.7);
  }
`

export const Arrow = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 1.5rem;
  cursor: pointer;
  fill: currentcolor;
  line-height: 1;
  user-select: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-transform: none;
  text-shadow: none;
  text-align: center;
  width: 24;
  height: 24;
  fill: none;
`
