import { useEffect } from 'react'
import Image from 'next/image'

const DisplaySelectedItems = (props) => {
  const { selectedItems, setSelectedItems } = props

  const handleRemoveSelectedItem = (item) => {
    const array = [...selectedItems]
    array.forEach((el) => {
      if (el === item) {
        array.splice(selectedItems.indexOf(el), 1)
        setSelectedItems(array)
      }
    })
  }

  return (
    <div className="selected-items-area d-flex flex-dir-row justify-c-start">
      {selectedItems.map((item, index) => {
        return (
          <div key={index} className="text-color-white">
            <span>{item}</span>
            <Image
              src={require('../../public/img/cross.png')}
              onClick={() => handleRemoveSelectedItem(item)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default DisplaySelectedItems
