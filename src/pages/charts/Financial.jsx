import React from 'react'
import { Header, FinancialChart } from '../../components'
const Financial = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Finacial Chart" catagory="Chart" />
      <div className="w-full">
        <FinancialChart />
      </div>
    </div>
  )
}

export default Financial