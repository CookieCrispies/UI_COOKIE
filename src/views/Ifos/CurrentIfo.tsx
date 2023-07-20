import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        {activeIfo? <IfoCard ifo={activeIfo} /> : <Text>No Active IDOs</Text>}
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to Participate in Decentralized IDOs on YogurtFactory')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before IDO')}:</Heading>
          <List>
            <li>{TranslateString(598, 'Get WPLS tokens')}</li>
          </List>
          <Flex mb="16px">
            {/* <LinkExternal href="https://Yogurtfactory.com/" mr="16px">
              {TranslateString(999, 'Buy Yogurt')}
            </LinkExternal> */}
            <LinkExternal href="https://app.pulsex.com/swap?outputCurrency=0xa1077a294dde1b09bb078844df40758a5d0f9a27">
              {TranslateString(999, 'Get WPLS tokens')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During IDO')}:</Heading>
          <List>
            <li>{TranslateString(602, 'While the IDO is live, commit your tokens to participate in the decentralized raise at the predetermined token price')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After IDO')}:</Heading>
          <List>
            <li>{TranslateString(606, 'Click "Claim" to claim the IDO tokens you purchased.')}</li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
          <img src="images/Yogurt/LogoTextNewDark.png" width={300} alt="Yogurt" />
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://docs.Yogurtfactory.com/Yogurt-products/ido"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <Image src="/images/Yogurt/logoYogurt2.png" alt="ifo" width={500} height={406} responsive />
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IDO?')}</Title>
            <Text mb={3}>
              {TranslateString(
                514,
                'Launch your project with YogurtFactory to bring your token directly to the most active and rapidly growing community on PulseChain.',
              )}
            </Text>
            <Button
              as="a"
              href="https://t.me/Yogurtsterol"
              external
            >
              {TranslateString(516, 'Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
