import SearchBox from '../SearchBox'

const SelectBox = (props) => {
  const { data, isMultiSelect, setSelectedItems, selectedItems } = props

  const addToSelectedList = (value) => {
    const items = selectedItems
    setSelectedItems(isMultiSelect ? [...items, value] : [value])
  }

  const RemoveFromSelectedList = (value) => {
    const items = selectedItems
    if (items.length > 0) {
      setSelectedItems(items.filter((item) => item !== value))
    }
  }

  return (
    <div className="select-box-container">
      <div className="select-box-section">
        <SearchBox />
      </div>
      {isMultiSelect && (
        <>
          <input
            type="checkbox"
            value={'all'}
            onChange={(e) => {
              e.target.checked ? setSelectedItems(data) : setSelectedItems([])
            }}
          ></input>
          <label>All</label>
        </>
      )}
      {data.map((item, index) => (
        <div key={index}>
          <div>
            {isMultiSelect ? (
              <div>
                <input
                  checked={!!selectedItems.find((el) => el === item)}
                  type="checkbox"
                  value={item}
                  onChange={(e) => {
                    e.target.checked
                      ? addToSelectedList(e.target.value)
                      : RemoveFromSelectedList(e.target.value)
                  }}
                ></input>
                <label>{item}</label>
              </div>
            ) : (
              <div className="radio-section">
                <label key={index} for="radioItem">
                  <input
                    type="radio"
                    checked={!!selectedItems.find((el) => el === item)}
                    name="radioItem"
                    value={item}
                    onChange={(e) => {
                      e.target.checked
                        ? addToSelectedList(e.target.value)
                        : RemoveFromSelectedList(e.target.value)
                    }}
                  ></input>
                  <span>{item}</span>
                </label>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SelectBox
