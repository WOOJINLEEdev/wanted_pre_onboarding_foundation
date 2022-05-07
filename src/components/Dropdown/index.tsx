/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from 'components/Dropdown/Dropdown.module.scss'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io'

const DATAS = [
  {
    key: 0,
    value: 'ALL SYMBOLS',
  },
  {
    key: 1,
    value: 'BREAKFAST',
  },
  {
    key: 2,
    value: 'CAPACITY',
  },
  {
    key: 3,
    value: 'DEMAND',
  },
  {
    key: 4,
    value: 'EFFECT',
  },
  {
    key: 5,
    value: 'FOOTBALL',
  },
  {
    key: 6,
    value: 'GROWTH',
  },
  {
    key: 7,
    value: 'HOUSE',
  },
  {
    key: 8,
    value: 'INTELLIGENT',
  },
  {
    key: 9,
    value: 'JSON',
  },
]

function Dropdown() {
  const [selectItem, setSelectItem] = useState(DATAS[0].value)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const dataValue = DATAS.map((data) => data.value)
  const searchResults = dataValue.filter((data) => data.toLowerCase().includes(searchInput.toLowerCase()))

  useEffect(() => {
    searchInputRef?.current?.focus()
  }, [isSearchOpen])

  const handleDropBtnClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen)
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value)
  }

  const handleSearchItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const targetValue = e.currentTarget.dataset.name || ''
    setSelectItem(targetValue)
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen)
    setSearchInput('')
  }

  return (
    <section className={styles.dropDownSection}>
      <h2 className={styles.sectionTitle}>Dropdown</h2>
      <button type='button' className={styles.btnDrop} onClick={handleDropBtnClick}>
        {selectItem}
        {isSearchOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>

      <div className={classNames(styles.searchWrapper, { [styles.hide]: !isSearchOpen })}>
        <div>
          <label htmlFor='inputSearch' className={styles.visuallyHidden}>
            검색
          </label>
          <input
            type='text'
            className={styles.searchInput}
            id='inputSearch'
            value={searchInput}
            onChange={handleSearchInputChange}
            ref={searchInputRef}
            placeholder='Search...'
          />
          <IoMdSearch />
        </div>

        <ul className={styles.searchList}>
          {searchResults.length > 0
            ? searchResults.map((result: string) => {
                return (
                  <li
                    key={`search_result_item_${result}`}
                    className={styles.searchItem}
                    data-name={result.toUpperCase()}
                    onClick={handleSearchItemClick}
                  >
                    {result.toUpperCase()}
                  </li>
                )
              })
            : DATAS.map((data) => {
                return (
                  <li
                    key={`data_item_${data.key}`}
                    className={styles.searchItem}
                    data-name={data.value}
                    onClick={handleSearchItemClick}
                  >
                    {data.value}
                  </li>
                )
              })}
        </ul>
      </div>
    </section>
  )
}

export default Dropdown
