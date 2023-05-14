import React from 'react'
import Header from '../../components/Header'
import OurStoryCards from '../../components/OurStoryCards'
import Footer from '../../components/Footer'
import SubHeader from '../../components/SubHeader'
import { Root, LandingPageHeader } from './LandingPage.style'

export default function LandingPage() {
  return (
    <Root>
      <LandingPageHeader>
        <Header />
        <SubHeader />
      </LandingPageHeader>
      <OurStoryCards />
      <Footer />
    </Root>
  )
}
