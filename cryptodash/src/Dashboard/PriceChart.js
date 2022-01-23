import React from 'react';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import ChartSelect from './ChartSelect';

export default function PriceChart() {
    return(
        <AppContext.Consumer>
        {({historical}) => 
            <Tile>
                <ChartSelect>
                    <option value = "Days">Days</option>
                    <option value = "Weeks">Weeks</option>
                    <option value = "Months">Months</option>
                </ChartSelect>
                {historical ? 
                    <ReactHighcharts config = {highchartsConfig(historical)} />
                    : <div> Loading historical Data</div>    
                }
            </Tile>
        }
        </AppContext.Consumer>
    )
}
