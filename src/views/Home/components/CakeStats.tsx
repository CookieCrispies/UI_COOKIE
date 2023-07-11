import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { CAKE_PER_BLOCK } from 'config'
import BigNumber from 'bignumber.js/bignumber'
import CardValue from './CardValue'
import { usePriceCakeBusd } from '../../../state/hooks'
import farms from "../../Farms";

const StyledCakeStats = styled(Card)`
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

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cubPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = cubPrice.times(circSupply);

  let ColaPerBlock = 0
  if (farms && farms[0] && farms[0].cubPerBlock) {
    ColaPerBlock = new BigNumber(farms[0].cubPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'COLA Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">📈 Market Cap</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">🟥 Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">🔥 Total Burned</Text>
          <CardValue fontSize="14px" value={0} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">✈️ Circulating Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">🥤 New COLA/block</Text>
          <Text bold fontSize="14px">
            {ColaPerBlock}
          </Text>
        </Row>
        <br/>
        <br/>
        <Row>
          <a href="https://www.coingecko.com/">
            <img src="/images/Cola/CG.png" width="80px" alt="Cola Defi" />
          </a>
          <a href="https://coinmarketcap.com/">
            <img src="/images/Cola/CMC.png" width="80px" alt="Cola Defi" />
          </a>
          <a href="https://vfat.tools/">
            <img src="/images/Cola/vfat.png" width="300px" alt="Cola Defi" />
          </a>
        </Row>


      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
