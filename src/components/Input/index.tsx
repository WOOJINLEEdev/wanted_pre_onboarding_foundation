import { useState } from 'react'
import classNames from 'classnames'
import styles from 'components/Input/Input.module.scss'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FiEyeOff, FiEye } from 'react-icons/fi'

function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValidation, setEmailValidation] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleEmailBlur = () => {
    if (email.length === 0) return setEmailValidation('')

    return !regexEmail.test(email) ? setEmailValidation('Invalid E-mail address.') : setEmailValidation('')
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlePasswordTypeBtnClick = () => {
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className={styles.inputSection}>
      <h2 className={styles.sectionTitle}>Input</h2>

      <form className={styles.loginWrapper} onSubmit={handleFormSubmit}>
        <div className={styles.emailWrapper}>
          <label htmlFor='email' className={styles.label}>
            E-mail
          </label>
          <div className={styles.emailInputWrapper}>
            <input
              type='email'
              id='email'
              className={styles.emailInput}
              placeholder='E-mail'
              value={email}
              onChange={handleEmailInputChange}
              onBlur={handleEmailBlur}
            />
            <BsCheckCircleFill className={styles.checkIcon} color={regexEmail.test(email) ? '#00b906' : '#efefef'} />
          </div>
          <p className={styles.validationText}>{emailValidation.length > 0 ? emailValidation : ''}</p>
        </div>

        <div className={styles.passwordWrapper}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={passwordType}
              id='password'
              className={styles.passwordInput}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type='button'
              className={classNames(styles.passwordBtn)}
              onClick={handlePasswordTypeBtnClick}
              aria-label='Password View'
            >
              {passwordType === 'password' ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Input
