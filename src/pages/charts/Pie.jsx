import React from 'react'
import { Header, PieChart } from '../../components'


const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Pie Chart" catagory="Chart" />
      <div className="w-full">
        <PieChart />
      </div>
    </div>
  )
}

export default Pie