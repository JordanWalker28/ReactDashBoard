import React from 'react';
import styled, {css} from 'styled-components';

const CoinImageStyled = styled.img`
    height: 50px;
    ${props => props.spotLight && css`
        height: 200px;
        margin: auto;
        display: block;
    `}
`

export default function CoinImage({coin, spotLight}) {
    
    try{
        return  <CoinImageStyled spotLight = {spotLight} alt={coin.CoinSymbol} src={`http://cryptocompare.com/${ coin.ImageUrl}`}></CoinImageStyled>
    }catch (e){
        console.warn(e);
    }
  return "Error!";
}
