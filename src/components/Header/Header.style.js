import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    height: 5.375rem;
    max-width: calc(100% - 4rem);
  }

  @media screen and (min-width: 1280px) {
    max-width: calc( 83.33333333333334% - 6rem );
  }
`
// export const HeaderWrap = styled.div`
// align-items: : center;
// `
export const Logo = styled.div`
  height: 40px;
  width: 148px;
  fill: rgba(229, 9, 20, 1);
`

export const Button = styled.button`
  font: 14px;
  background-color: rgba(229, 9, 20, 1);
  cursor: pointer;
  border: none;
  height: 32px;
  width: 76.44px;
  border: 3px;
  border-radius: 0.25rem;

  & a {
    color: white;
    height: 24px;
    font-weight: bold;
    text-decoration: none;
  }
`

