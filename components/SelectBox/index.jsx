import { useEffect, useState } from 'react'
import SearchBox from '../SearchBox'

const SelectBox = (props) => {
  const {
    data,
    isMultiSelect,
    setSelectedItems,
    selectedItems,
    title,
    searchValue,
    setSearchValue,
    searchListResult,
    setSearchListResult,
  } = props

  const [listData, setListData] = useState([])

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

  useEffect(() => {
    if (searchValue) {
      setListData(searchListResult)
    } else setListData(data)
  }, [searchValue])

  useEffect(() => {
    if (data.length > 0) {
      setListData(data)
    }
  }, [data])

  return (
    <div className="select-box-container">
      <div className="select-box-section">
        <SearchBox
          fieldTitle={title}
          data={data}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchListResult={searchListResult}
          setSearchListResult={setSearchListResult}
        />
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
      {listData?.map((item, index) => {
        return (
          <div key={index}>
            <div>
              {isMultiSelect ? (
                <div key={index}>
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
        )
      })}
    </div>
  )
}

export default SelectBox
