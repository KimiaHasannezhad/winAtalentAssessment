import SearchBox from '../SearchBox'

const SelectBox = (data) => {
  return (
    <div className="select-box-container">
      <div className="select-box-section">
        <SearchBox />
      </div>
      <div>
        {data.data.map((item, index) => (
          <div className="names-section">
            <label key={index}>
              <input type="checkbox"></input>
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectBox
