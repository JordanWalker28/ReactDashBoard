import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';
import PriceChart from './PriceChart';
import LiveChart from './LiveChart';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 15px;
`

export default function Index() {
    return <Page name ="Dashboard">
        <div><h1>Selected Coins</h1></div>
        <PriceGrid/>
        <div><h1>Coin Information</h1></div>
        <ChartGrid>
            <CoinSpotlight/>
            <PriceChart/>
        </ChartGrid>
        <LiveChart />
    </Page>
}