import React from 'react'
import { Header, AreaChart } from '../../components'


const Area = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Area Chart" catagory="Chart" />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  )
}

export default Area