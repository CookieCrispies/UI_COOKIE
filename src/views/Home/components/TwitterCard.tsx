import React from 'react'
import {Card, CardBody, Heading, Text} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
          <Heading size="xl" mb="24px">
              {TranslateString(10003, 'Announcements')}
          </Heading>
          <Row>
              <Text fontSize="14px">🔥 LP Burned : </Text>
              <Text bold fontSize="14px">
                  <a href="https://scan.pulsechain.com/tx/0x9f9742fc868bd7245bebf0c6c21feb707369976395bdc6b5d1c0d0da8a9c65a0">TX hash id</a>
              </Text>
          </Row>
          <Row>
              <Text fontSize="14px">👨‍🍳 Yogurt contract : </Text>
              <Text bold fontSize="14px">
                  <a href="https://scan.pulsechain.com/token/0xece11C704F38FF38520667AeCDd7f53eA82F60F5/token-transfers">0xece11C704F38FF38520667AeCDd7f53eA82F60F5</a>
              </Text>
          </Row>
          <Row>
              <Text fontSize="14px">👨‍🍳 Masterchef contract : </Text>
              <Text bold fontSize="14px">
                  <a href="https://scan.pulsechain.com/address/0xca3E704Bd09B979170D76d34880c7A72fda51B63">0xca3E704Bd09B979170D76d34880c7A72fda51B63</a>
              </Text>
          </Row>
          <Row>
              <Text fontSize="14px">🔐 Timelock contract: </Text>
              <Text bold fontSize="14px">
                  <a href="https://scan.pulsechain.com/address/0x4f2f0F7F30837DB294A70d45767EEa98017098ff">0x4f2f0F7F30837DB294A70d45767EEa98017098ff</a>
              </Text>
          </Row>
          <br/>
          <br/>
          <Row>
              <img src="/images/Yogurt/farm_live.jpg" alt="Yogurt Defi" />
          </Row>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
