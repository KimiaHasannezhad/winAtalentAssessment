import { useState, useEffect, useContext } from 'react'
import { MultiSelectCounterContext } from '../../context/MultiSelectCounterContext'
import SelectBox from '../SelectBox'

const Dropdown = (props) => {
  const { title, allowMultiSelect, data } = props
  const [showSelectBox, setShowSelectBox] = useState(false)
  const [sortedList, setSortedList] = useState()
  const { counter } = useContext(MultiSelectCounterContext)
  const [selectedItem, setSelectedItem] = useState()
  const [selectedMode, setSelectedMode] = useState('default')

  const setSingleSelectItem = (value) => setSelectedItem(value)

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
    if (counter && selectedItem) {
      setSelectedMode('selected')
    }
  }, [counter, selectedItem])

  return (
    <div className="container">
      <div className="dropdown-section">
        <button
          className={
            `${selectedMode === 'selected'}` ? 'bgColor-blue' : 'bgColor-white'
          }
          onClick={() => {
            setShowSelectBox(!showSelectBox)
          }}
        >
          {title}
          {allowMultiSelect ? (
            <span>{counter}</span>
          ) : (
            <span>{selectedItem}</span>
          )}
        </button>
      </div>
      <div className="select-box-area">
        {showSelectBox && (
          <SelectBox
            data={sortedList}
            isMultiSelect={allowMultiSelect}
            setSelectedItem={setSingleSelectItem}
          />
        )}
      </div>
    </div>
  )
}
export default Dropdown
