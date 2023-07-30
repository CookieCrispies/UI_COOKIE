import React from 'react'
import { Card, CardBody, Heading} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import DexTools from './images/dextools.png'
import DexScreener from './images/dexscreener.png'
import Gecko from './images/gecko.png'



const StyledCardBody = styled(CardBody)`
  justify-content: space-between;
  @media screen and (max-width:968px) {
    text-align: center
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Imgcenter = styled.img`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`

const SocialCard = () => {
  const TranslateString = useI18n()

  return (
      <StyledCardBody>
            <a href='https://www.geckoterminal.com/fr/pulsechain/pools/0xca8544e46153f6b2ab535bb6549daaaecb71d58a' rel="noreferrer" target="_blank">
              <img
                src={Gecko}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>


            <a href='https://www.dextools.io/app/en/pulse/pair-explorer/0xca8544e46153f6b2ab535bb6549daaaecb71d58a' rel="noreferrer" target="_blank">
              <img
                src={DexTools}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

            <a href='https://dexscreener.com/pulsechain/0xca8544e46153f6b2ab535bb6549daaaecb71d58a' rel="noreferrer" target="_blank">
              <img
                src={DexScreener}
                loading='lazy'
                width='95px'
                alt=''
              />
            </a>

      </StyledCardBody>
  )
}

export default SocialCard
