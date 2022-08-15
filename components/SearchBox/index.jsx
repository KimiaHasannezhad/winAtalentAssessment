import { useEffect } from 'react'

const SearchBox = (props) => {
  const {
    fieldTitle,
    data,
    searchValue,
    setSearchValue,
    setSearchListResult,
  } = props

  useEffect(() => {
    setSearchValue(searchValue)
  }, [searchValue])

  const handleSearch = (value) => {
    setSearchValue(value)
    setSearchListResult(data.filter((item) => item.includes(value)))
  }

  return (
    <div className="search-box-area">
      <input
        type="text"
        placeholder={`Search ${fieldTitle}`}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      ></input>
    </div>
  )
}

export default SearchBox
