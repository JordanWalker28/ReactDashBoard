import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';
import HighchartsTheme from './HighchartsTheme';
import ReactHighcharts from 'react-highcharts';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

export default function PriceGrid() {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGridStyled>
                    {prices.map((price, index ) => (
                        <PriceTile key={'priceTile-${index}'} index = {index} price = {price}/>
                    ))}
                </PriceGridStyled>
            )}
        </AppContext.Consumer>
    )
}