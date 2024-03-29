import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function Index() {
    return <Page name ="Coin Selection">
        <WelcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <Search/>
        <CoinGrid/>
    </Page>
}