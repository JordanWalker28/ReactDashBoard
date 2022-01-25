import React from 'react';
import livechartsConfig from './HighChartsLive';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';

export default function LiveChart() {
    return(
        <AppContext.Consumer>
        {() => 
            <Tile>

                    <ReactHighcharts config = {livechartsConfig()} />

            </Tile>
        }
        </AppContext.Consumer>
    )
}
