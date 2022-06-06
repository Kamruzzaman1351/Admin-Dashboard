import React, {useContext} from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } 
from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummyData';
import DashboardContext from '../../contexts/DashboardContext';
const PieChart = () => {
  const { currentMode } = useContext(DashboardContext)
  return (
    <AccumulationChartComponent
      id="pie"
      legendSettings={{ visible: true, background: 'white' }}
      height="full"      
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'} 
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          dataSource={pieChartData} 
          xName='x' 
          yName='y' 
          type='Pie'
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart