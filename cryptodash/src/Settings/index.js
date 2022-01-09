import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'

export default function Index() {
    return <Page name ="Settings">
        <WelcomeMessage/>
        <ConfirmButton/>
        <CoinGrid/>
    </Page>
}