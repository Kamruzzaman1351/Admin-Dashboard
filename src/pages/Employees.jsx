import React from 'react'
import { Header } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from "@syncfusion/ej2-react-grids"
import { employeesData, employeesGrid, contextMenuItems } from "../data/dummyData"



const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header title="Employees List" catagory="Page" />
        <GridComponent
          dataSource={employeesData}
          width="auto"
          allowPaging
          allowSorting
          contextMenuItems={contextMenuItems}
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
          allowExcelExport
          allowPdfExport
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Sort, Filter, Page, Toolbar, ExcelExport, PdfExport, Edit,ContextMenu]} />
        </GridComponent>
    </div>
  )
}

export default Employees