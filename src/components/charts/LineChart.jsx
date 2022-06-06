import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
        Inject, DateTime, Legend, Tooltip, LineSeries
      } from "@syncfusion/ej2-react-charts"
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, lineChartData } from '../../data/dummyData'



const LineChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height="450px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{width:0}}}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip,]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart