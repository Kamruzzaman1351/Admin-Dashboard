import React from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs"



const ColorPicker = () => {
  const change = (args) =>{
    document.getElementById("preview").style.backgroundColor = args.currentValue.hex
    document.getElementById("color-code").textContent = args.currentValue.hex
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" catagory="App" />
      <div className="text-center">
        <div id="preview" />
        <p id="color-code"></p>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode="Palette"
              modueSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode="Picker"
              modueSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker