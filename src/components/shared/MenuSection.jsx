import React from 'react'
import { links } from "../../data/dummyData"
import ManuList from './ManuList'
const MenuSection = () => {
    
  return (
    <div className="mt-10">
        {links.map((item) => (
            <ManuList key={item.title} item= {item} />
        ))}
    </div>
  )
}

export default MenuSection