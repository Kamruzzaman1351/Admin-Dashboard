import React from 'react'
import { Header } from '../components'
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from "@syncfusion/ej2-react-grids"
import {ordersData, contextMenuItems, ordersGrid} from "../data/dummyData"


const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Order" catagory="Page"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          { ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          )) }
        </ColumnsDirective>
        <Inject 
          services={[Resize, Sort, Filter, Page, ContextMenu, ExcelExport, PdfExport, Edit]}  
        />
      </GridComponent>
    </div>
  )
}

export default Orders