import React from 'react'
import { Header, BarChart } from '../../components'


const Bar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Bar Chart" catagory="Chart" />
      <div className="w-full">
        <BarChart />
      </div>
    </div>
  )
}

export default Bar