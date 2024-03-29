import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import styled from 'styled-components';

const SpotLightName = styled.h2`
    text-align: center;
`

export default function CoinSpotlight() {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                <Tile> 
                    <SpotLightName>{coinList[currentFavorite].CoinName} </SpotLightName> 
                    <CoinImage coin = {coinList[currentFavorite]} spotLight />
                </Tile>
            }
        </AppContext.Consumer>
    )
}