import { useState } from 'react'
import styles from 'components/Tab/Tab.module.scss'
import classNames from 'classnames'

const TABS = [
  {
    key: 0,
    value: 'potato',
    name: '감자',
  },
  {
    key: 1,
    value: 'sweet potato',
    name: '고구마',
  },
  {
    key: 2,
    value: 'curry rice',
    name: '카레라이스',
  },
]

function Tab() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabBtnClick = (key: number) => {
    setCurrentTab(key)
  }

  return (
    <section className={styles.tabSection}>
      <h2 className={styles.sectionTitle}>Tab</h2>
      <ul className={styles.tabList}>
        {TABS.map((tab) => {
          return (
            <li className={styles.tabItem} key={`tab_item_${tab.key}`}>
              <button
                type='button'
                className={classNames(styles.tabBtn, { [styles.active]: currentTab === tab.key })}
                onClick={() => handleTabBtnClick(tab.key)}
              >
                {tab.name}
              </button>
            </li>
          )
        })}
      </ul>

      <div
        className={classNames(
          styles.indicator,
          { [styles.first]: currentTab === 0 },
          { [styles.second]: currentTab === 1 },
          { [styles.third]: currentTab === 2 }
        )}
      >
        <div className={styles.indicatorBorder} />
      </div>
    </section>
  )
}

export default Tab
