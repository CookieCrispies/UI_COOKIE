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
  YogurtDen?: any
}

const TotalStaked: React.FC<TotalStakedProps> = ({ farms, cakePrice, bakePrice, beltPrice, YogurtDen }) => {
  const [totalStakeUSD, totalYogurt, totalYogurtUSD, totalAPY, totalDailyAPR, count] = useTotalStaked(farms, cakePrice, bakePrice, beltPrice, YogurtDen);

  const avgAPY = totalAPY.toString() !== 'NaN' && totalAPY !== 0 ? totalAPY / count : 0
  const avgDaily = totalDailyAPR ? totalDailyAPR / count : 0

  const stakedUSDFormatted = totalStakeUSD ?  `$${totalStakeUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
    : '0.00'
  const dailyFormatted = avgDaily ?  `${avgDaily.toLocaleString('en-US', { maximumFractionDigits: 2 })}%`
      : '0.00'
  const YogurtUSDFormatted = totalYogurtUSD ?  `$${totalYogurtUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
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
          <Text>Average APY</Text>
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
          <Text>Yogurt Rewards</Text>
          <Balance
            fontSize="18px"
            value={totalYogurt}
            decimals={totalYogurt ? 2 : 1}
            unit=""
            color="textSubtle"
          />
          <Text>{YogurtUSDFormatted}</Text>
        </div>
      </Flex>
    </Wrapper>
  )
}

export default TotalStaked
