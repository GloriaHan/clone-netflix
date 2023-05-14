import styled from 'styled-components'
import website_large from '../../img/website_large.jpg'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

export const LandingPageHeader = styled.div`
  height: 944px;
  background-image: url(${website_large});
  background-size: 100% auto;
  overflow: hidden;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  background-size: cover;
  /* background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  ); */
`
// export const Div = styled.div`
//   padding: 0 48px;
// `
