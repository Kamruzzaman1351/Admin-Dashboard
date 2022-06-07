import React from 'react'
import { StackedChart, Header } from '../../components'
const Stacked = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Stack Chart" catagory="Chart" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked