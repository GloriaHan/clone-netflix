/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Root, Logo, Button} from './Header.style'
import { NetflixLogoImg } from '../../img/Icons'

export default function Header() {
  return (
    <Root>
      <Logo>
        <NetflixLogoImg />
      </Logo>
      <Button>
        <a href="/login">Sign in</a>
      </Button>
    </Root>
  )
}
