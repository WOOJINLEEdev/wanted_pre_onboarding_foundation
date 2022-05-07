import styles from 'components/Toggle/Toggle.module.scss'

function Toggle() {
  return (
    <section className={styles.toggleSection}>
      <h2 className={styles.sectionTitle}>Toggle</h2>
      <label htmlFor='toggleButton' className={styles.toggleBtn}>
        <input type='checkbox' id='toggleButton' />
        <span className={styles.toggleText}>
          <span className={styles.textDefault}>기본</span>
          <span className={styles.textDetail}>상세</span>
        </span>
      </label>
    </section>
  )
}

export default Toggle
