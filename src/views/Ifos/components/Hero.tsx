import React from 'react'
import styled from 'styled-components'
import { Heading, Button } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const StyledHero = styled.div`
  background: ${({ theme}) => theme.colors.gradients.bubblegum};
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{TranslateString(500, 'IDO: Initial DEX Offerings')}</Title>
        <Heading as="h2" color="secondary">{TranslateString(502, 'Participate in new platform tokens via decentralized IDOs!')}</Heading>
        <br />
        {/* <Wrapper>
          <Button size="sm">
            <a href="https://docs.cookiebase.finance/Cookie-products/ido">Learn More</a>
          </Button>
        </Wrapper> */}
      </Container>
    </StyledHero>
  )
}

export default Hero
