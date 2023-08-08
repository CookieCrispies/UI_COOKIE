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
          <Heading size="md" mb="24px">
              {TranslateString(10003, 'Announcements the 9th August ! ')}
          </Heading>
          <img src="/images/four.png" width="500px" height="500px" alt="Cookie Defi" />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
