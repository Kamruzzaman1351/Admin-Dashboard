import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
    Inject, DateTime, Legend, SplineAreaSeries
  } from "@syncfusion/ej2-react-charts"
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from '../../data/dummyData'
const AreaChart = () => {
  return (
    <ChartComponent
      id="line-chart"
      height="450px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{width:0}}}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend ]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart