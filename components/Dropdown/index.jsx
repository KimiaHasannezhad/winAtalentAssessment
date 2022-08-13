import { useState, useEffect } from 'react'
import SelectBox from '../SelectBox'

const Dropdown = (props) => {
  let { title, data } = props
  const [showSelectBox, setShowSelectBox] = useState(false)
  const [sortedList, setSortedList] = useState()

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

  return (
    <div className="container">
      <div className="dropdown-section">
        <button
          onClick={() => {
            setShowSelectBox(!showSelectBox)
          }}
        >
          {title}
        </button>
      </div>
      <div className="select-box-area">
        {showSelectBox && <SelectBox data={sortedList} />}
      </div>
    </div>
  )
}
export default Dropdown
