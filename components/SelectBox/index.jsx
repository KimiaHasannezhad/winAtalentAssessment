import SearchBox from '../SearchBox'

const SelectBox = (props) => {
  const { data, isMultiSelect } = props
  return (
    <div className="select-box-container">
      <div className="select-box-section">
        <SearchBox />
      </div>
      <div>
        {data.map((item, index) => (
          <div>
            <div key={index}>
              {isMultiSelect ? (
                <>
                  <input type="checkbox"></input>
                  <label key={index}>{item}</label>
                </>
              ) : (
                <div className="radio-section">
                  <label key={index} for="radioItem">
                    <input type="radio" name="radioItem"></input>
                    <span>
                      {item}
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectBox
