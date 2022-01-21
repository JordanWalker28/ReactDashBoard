import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from '../Shared/Tile'
import { fontSize2, fontSizeBig, greenBoxShadow} from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../CoinSelection/CoinHeaderGrid';
import { AppContext } from '../App/AppProvider';

const JustifyRight = styled.div`
    justify-self: right;
`

const JustifyLeft = styled.div`
    justify-self: left;
`

const TickerPrice = styled.div`
    ${fontSizeBig};
`

const numberFormat = number => {
    if(isNaN(number)){
        return "No Data"
    }
    let value = +(number + '').slice(0,8);
    let result = "£" + value
    return result;
}

const PriceTileStyle = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize2}
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: right;
    `}

    ${props => props.currentFavorite && css`
        ${greenBoxShadow}
        pointer-events: none;
    `}
`
const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`

function ChangePercent({data}){
    return (
        <JustifyRight>
            <ChangePct red = {data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>   
        </JustifyRight>
    )
}

function PriceTileCompact({sym, data, currentFavorite, setCurrentFavorite}){
    return (
        <PriceTileStyle onClick = {setCurrentFavorite} compact currentFavorite = {currentFavorite}>
            <JustifyLeft> {sym} </JustifyLeft>
                <ChangePercent data = {data}/>
            <div>
                {numberFormat(data.PRICE)}
            </div>
        </PriceTileStyle>
    ); 
}

function PriceTileStyled({sym, data, currentFavorite, setCurrentFavorite}){
    return (
        <PriceTileStyle onClick = {setCurrentFavorite} currentFavorite = {currentFavorite}>
            <CoinHeaderGridStyled>
                <div> {sym} </div>
                <ChangePercent data = {data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>
                {numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyle>
    );
}

export default function PriceTile({price,index}){
    let sym = Object.keys(price)[0];
    let data = price[sym]['GBP'];
    let TileClass = index < 5 ? PriceTileStyled : PriceTileCompact;
    return (<AppContext.Consumer>
        {({currentFavorite, setCurrentFavorite}) => 
            <TileClass sym = {sym} data = {data} currentFavorite = {currentFavorite === sym} setCurrentFavorite = {() => setCurrentFavorite(sym)}/> 
        }
    </AppContext.Consumer>)

}