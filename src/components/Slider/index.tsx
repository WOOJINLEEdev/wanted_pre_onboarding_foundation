import { useState } from 'react'
import styles from 'components/Slider/Slider.module.scss'
import { AiOutlinePercentage } from 'react-icons/ai'

const OPTIONS = [1, 25, 50, 75, 100]

function Slider() {
  const [rangeValue, setRangeValue] = useState(1)

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value
    setRangeValue(Number(targetValue))
  }

  const handleOptionClick = (e: React.MouseEvent<HTMLOptionElement>) => {
    const targetValue = e.currentTarget.value
    setRangeValue(Number(targetValue))
  }

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sectionTitle}>Slider</h2>
      <div className={styles.slideInputWrapper}>
        <div className={styles.percentWrapper}>
          <label htmlFor='percent' className={styles.visuallyHidden}>
            Percent
          </label>
          <input type='text' id='percent' className={styles.percentInput} value={rangeValue} readOnly />
          <AiOutlinePercentage />
        </div>

        <div className={styles.rangeWrapper}>
          <label htmlFor='rangeSlider' className={styles.visuallyHidden}>
            Range Slider
          </label>
          <input
            type='range'
            id='rangeSlider'
            className={styles.rangeInput}
            list='range'
            min='1'
            max='100'
            step='1'
            value={rangeValue}
            onChange={handleRangeInputChange}
          />

          <datalist id='range' className={styles.dataList}>
            {OPTIONS.map((option) => {
              return (
                <option
                  key={`range_option_${option}`}
                  className={styles.rangeOption}
                  value={option}
                  label={`${option}%`}
                  onClick={handleOptionClick}
                />
              )
            })}
          </datalist>
        </div>
      </div>
    </section>
  )
}

export default Slider
