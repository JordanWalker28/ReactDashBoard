import React from 'react';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';

export default function PriceChart() {
    return(
        <AppContext.Consumer>
        {({historical}) => 
            <Tile>
                {historical ? 
                    <ReactHighcharts config = {highchartsConfig(historical)} />
                    : <div> Loading historical Data</div>    
                }
            </Tile>
        }
        </AppContext.Consumer>
    )
}
