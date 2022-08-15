import { useState, useEffect } from 'react'
import SelectBox from '../SelectBox'
import Image from 'next/image'

const Dropdown = (props) => {
  const { title, allowMultiSelect, data } = props
  const [showSelectBox, setShowSelectBox] = useState(false)
  const [sortedList, setSortedList] = useState()
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedMode, setSelectedMode] = useState(false)
  const [searchValue, setSearchValue] = useState()
  const [searchListResult, setSearchListResult] = useState([])

  const handleSelectedList = (value) => setSelectedItems(value)

  const sortData = (data) => {
    const slicedData = data.slice(0, 200)
    let names = []
    slicedData.forEach((el) => {
      names.push(el.name)
    })
    setSortedList(names.sort())
  }

  useEffect(() => {
    sortData(data)
  }, [data])

  useEffect(() => {
    if (selectedItems.length > 0) {
      setSelectedMode(true)
    } else {
      setSelectedMode(false)
    }
  }, [selectedItems])

  const handleCreateMultiSelectBox = () => {
    return (
      <>
        {!selectedMode ? (
          <>
            <span>{title}</span>
            <Image
              src={require('../../public/img/arrow-down-black.png')}
            ></Image>
          </>
        ) : (
          <>
            <span>{title}</span>
            <span
              className="bg-color-white text-color-blue d-flex flex-dir-col justify-c-center"
              id="counter-area"
            >
              {selectedItems.length}
            </span>
            <Image src={require('../../public/img/arrow-down-white.png')} />
          </>
        )}
      </>
    )
  }

  const handleCreateSingleSelectBox = () => {
    return (
      <>
        {!selectedMode ? (
          <>
            <span>{title}</span>
            <Image
              src={require('../../public/img/arrow-down-black.png')}
            ></Image>
          </>
        ) : (
          <>
            <span>{selectedItems[0]}</span>
            <Image
              src={require('../../public/img/cross.png')}
              onClick={() => !allowMultiSelect && setSelectedItems([])}
            ></Image>
          </>
        )}
      </>
    )
  }

  return (
    <div className="d-flex flex-dir-col" id="dropdown-area">
      <div className="dropdown-section">
        <button
          className={` d-flex flex-dir-row justify-c-space-between ${
            selectedMode ? 'bg-color-blue text-color-white' : 'bg-color-white'
          }`}
          onClick={() => {
            setShowSelectBox(!showSelectBox)
          }}
        >
          {allowMultiSelect
            ? handleCreateMultiSelectBox()
            : handleCreateSingleSelectBox()}
        </button>
      </div>
      <div className="select-box-area">
        {showSelectBox && (
          <SelectBox
            data={sortedList}
            title={title}
            isMultiSelect={allowMultiSelect}
            selectedItems={selectedItems}
            setSelectedItems={handleSelectedList}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchListResult={searchListResult}
            setSearchListResult={setSearchListResult}
          />
        )}
      </div>
    </div>
  )
}
export default Dropdown
