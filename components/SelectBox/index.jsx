import { useContext } from 'react'
import { MultiSelectCounterContext } from '../../context/MultiSelectCounterContext'
import SearchBox from '../SearchBox'

const SelectBox = (props) => {
  const { data, isMultiSelect ,  setSelectedItem } = props
  const { counter, setCounter } = useContext(MultiSelectCounterContext)
 

  return (
    <div className="select-box-container">
      <div className="select-box-section">
        <SearchBox />
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            {isMultiSelect ? (
              <div>
                <input
                  type="checkbox"
                  value={item}
                  onChange={(e) => {
                    e.target.checked
                      ? setCounter(counter + 1)
                      : setCounter(counter - 1)
                  }}
                ></input>
                <label>{item}</label>
              </div>
            ) : (
              <div className="radio-section   ">
                <label key={index} for="radioItem">
                  <input
                    type="radio"
                    name="radioItem"
                    value={item}
                    onChange={(e) => {
                      e.target.checked && setSelectedItem(e.target.value)
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
