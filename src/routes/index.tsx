import styles from 'routes/Routes.module.scss'
import Dropdown from 'components/Dropdown'
import Input from 'components/Input'
import Slider from 'components/Slider'
import Tab from 'components/Tab'
import Toggle from 'components/Toggle'

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>원티드 프리온보딩 사전 과제 컨버팅</h1>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
