import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from '@pancakeswap-libs/uikit'

const StyledFarmStakingCard = styled(Card)`
  background: linear-gradient(#ff2d49, #4576d9);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const BridgeCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          VIP presale
        </Heading>
        <CardMidContent color="invertedContrast">Get COLA token !</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            LIVE !
          </Heading>
          <Link href="https://forms.gle/Ms6z83Ci4a6wBmTe8">
            <ArrowForwardIcon mt={30} color="contrast" />
          </Link>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default BridgeCard
