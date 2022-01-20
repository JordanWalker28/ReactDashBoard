export default function () {
    return {

        title: {
            text: 'CoinName'
          },
        
          subtitle: {
            text: 'Source: cryptocompare.com.com'
          },
        
          yAxis: {
            title: {
              text: 'Price'
            }
          },
        
          xAxis: {
            accessibility: {
              rangeDescription: 'Range: 2010 to 2017'
            }
          },
        
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
        
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
        
          series: [{
            name: 'Installation',
            data: Array.from({length: 40}, () => Math.floor(Math.random() * 300))
          }],
        
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }]
          }
        
        };
          
    }
