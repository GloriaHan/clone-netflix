/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ArrowRight } from '../../img/Icons'
import {
  Root,
  HeaderWrap,
  H1,
  P1,
  P2,
  Form,
  Input,
  Button,
  Arrow
} from './SubHeader.style'

export default function SubHeader() {
  return (
    <Root>
      <HeaderWrap>
        <H1>Unlimited movies, TV shows and more</H1>
        <P1>Watch anywhere. Cancel at any time</P1>
        <P2>
          Ready to watch Netflix? Enter your email to create or restart your
          membership.
        </P2>
        <Form>
          <Input id="email" placeholder="Email address"></Input>
          <Button>
            Get Started
            <Arrow><ArrowRight /></Arrow>
          </Button>
        </Form>
      </HeaderWrap>
    </Root>
  )
}
