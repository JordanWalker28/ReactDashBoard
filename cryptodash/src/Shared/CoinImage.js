import React from 'react';

export default function CoinImage({coin, style}) {

    let result = ""

    try{
        return <img alt={coin.CoinSymbol} style = { style || {height: '50px'}} src={`http://cryptocompare.com/${ coin.ImageUrl}`}/>
    }catch (e){
        console.warn(e);
    }
  return result;
}
