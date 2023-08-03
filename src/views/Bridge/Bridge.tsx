import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { SquidWidget } from "@0xsquid/widget";
import Container from "../../components/layout/Container";

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 0px;
  text-align: center;
  img {
    max-width: 150px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');
    // background-position: left center, right center;
    // height: 165px;
    height: auto;
    padding-top: 0;
    img {
      max-width: 300px;
    }
  }
`

const Container2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 350px;
    padding-right: 24px;
  }
`


const Bridge: React.FC = () => {
  const TranslateString = useI18n()

  return (
      <Container2>
          <SquidWidget config={
              {
                  "integratorId": "cookiebase-swap-widget",
                  "companyName": "CookieBase",
                  "style": {
                      "neutralContent": "#959BB2",
                      "baseContent": "#E8ECF2",
                      "base100": "#10151B",
                      "base200": "#272D3D",
                      "base300": "#171D2B",
                      "error": "#ED6A5E",
                      "warning": "#FFB155",
                      "success": "#2EAEB0",
                      "primary": "#71B4BD",
                      "secondary": "#71B4BD",
                      "secondaryContent": "#191C29",
                      "neutral": "#191C29",
                      "roundedBtn": "5px",
                      "roundedCornerBtn": "999px",
                      "roundedBox": "5px",
                      "roundedDropDown": "7px"
                  },
                  "slippage": 1.5,
                  "infiniteApproval": false,
                  "enableExpress": true,
                  "apiUrl": "https://api.squidrouter.com",
                  "comingSoonChainIds": [
                      "cosmoshub-4",
                      "injective-1",
                      "kichain-2"
                  ],
                  "titles": {
                      "swap": "Swap",
                      "settings": "Settings",
                      "wallets": "Wallets",
                      "tokens": "Select Token",
                      "chains": "Select Chain",
                      "history": "History",
                      "transaction": "Transaction",
                      "allTokens": "Select Token",
                      "destination": "Destination address"
                  },
                  "priceImpactWarnings": {
                      "warning": 3,
                      "critical": 5
                  }
              }
          } />
      </Container2>
  )
}

export default Bridge
