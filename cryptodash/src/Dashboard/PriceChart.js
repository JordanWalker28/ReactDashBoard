import React from 'react';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import ChartSelect from './ChartSelect';

export default function PriceChart() {
    return(
        <AppContext.Consumer>
        {({historical, changeChartSelect}) => 
            <Tile>
                <ChartSelect 
                    defaultValue = {"months"}
                    onChange = {e => changeChartSelect(e.target.value)}
                >
                        <option value = "days">Days</option>
                        <option value = "weeks">Weeks</option>
                        <option value = "months">Months</option>
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
