import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import Balance from 'components/Balance'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import useTotalStaked from '../hooks/useTotalStaked';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

interface TotalStakedProps {
  farms: any
  cakePrice: BigNumber
  bakePrice?: BigNumber
  beltPrice?: BigNumber
  CookieDen?: any
}

const TotalStaked: React.FC<TotalStakedProps> = ({ farms, cakePrice, bakePrice, beltPrice, CookieDen }) => {
  const [totalStakeUSD, totalCookie, totalCookieUSD, totalAPY, totalDailyAPR, count] = useTotalStaked(farms, cakePrice, bakePrice, beltPrice, CookieDen);

  const avgAPY = totalAPY.toString() !== 'NaN' && totalAPY !== 0 ? totalAPY / count : 0
  const avgDaily = totalDailyAPR ? totalDailyAPR / count : 0

  const stakedUSDFormatted = totalStakeUSD ?  `$${totalStakeUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
    : '0.00'
  const dailyFormatted = avgDaily ?  `${avgDaily.toLocaleString('en-US', { maximumFractionDigits: 2 })}%`
      : '0.00'
  const CookieUSDFormatted = totalCookieUSD ?  `$${totalCookieUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
        : '0.00'

  return (
    <Wrapper>
      <Flex justifyContent="space-between" alignItems="flex-start">
        <div>
          <Text>Total Deposit</Text>
          <Text fontSize="18px" color="textSubtle">{stakedUSDFormatted}</Text>
          <Text>{count} assets</Text>
        </div>
        <div>
          <Text>Average APR</Text>
          <Balance
            fontSize="18px"
            value={avgAPY}
            decimals={avgAPY ? 2 : 1}
            unit="%"
            color="textSubtle"
          />
          <Text>Daily {dailyFormatted}</Text>
        </div>
        <div>
          <Text>Cookie Rewards</Text>
          <Balance
            fontSize="18px"
            value={totalCookie}
            decimals={totalCookie ? 2 : 1}
            unit=""
            color="textSubtle"
          />
          <Text>{CookieUSDFormatted}</Text>
        </div>
      </Flex>
    </Wrapper>
  )
}

export default TotalStaked
