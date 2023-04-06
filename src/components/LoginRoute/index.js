import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import LoaderCard from '../LoaderCard'

import {
  LoginRouteBgContainer,
  LoginForm,
  LoginFormLogo,
  LoginFormUsernameLabel,
  LoginFormUsernameInput,
  LoginFormPasswordLabel,
  LoginFormPasswordInput,
  LoginFormShowPasswordCard,
  LoginFormShowPasswordCheckbox,
  LoginFormShowPasswordCheckboxLabel,
  LoginFormButton,
  LoginFormErrorMessage,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isErrorGenerated: false,
    errorMessage: '',
    isLoaderLoading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoaderLoading: false})
    }, 1000)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeTogglePassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  setSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setSuccess(data.jwt_token)
    } else {
      this.setState({isErrorGenerated: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      isErrorGenerated,
      errorMessage,
      isLoaderLoading,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <LoginRouteBgContainer
              isDarkModeEnabled={isDarkModeEnabled}
              data-testid="loginRoute"
            >
              {isLoaderLoading ? (
                <LoaderCard />
              ) : (
                <LoginForm
                  isDarkModeEnabled={isDarkModeEnabled}
                  onSubmit={this.onSubmitUserDetails}
                >
                  <LoginFormLogo
                    src={
                      isDarkModeEnabled
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                  <LoginFormUsernameLabel
                    htmlFor="username"
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    USERNAME
                  </LoginFormUsernameLabel>
                  <LoginFormUsernameInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    id="username"
                    onChange={this.onChangeUsername}
                    isDarkModeEnabled={isDarkModeEnabled}
                  />
                  <LoginFormPasswordLabel
                    htmlFor="password"
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    PASSWORD
                  </LoginFormPasswordLabel>
                  <LoginFormPasswordInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                    isDarkModeEnabled={isDarkModeEnabled}
                  />
                  <LoginFormShowPasswordCard>
                    <LoginFormShowPasswordCheckbox
                      type="checkbox"
                      id="checkbox"
                      checked={showPassword}
                      onChange={this.onChangeTogglePassword}
                      isDarkModeEnabled={isDarkModeEnabled}
                    />
                    <LoginFormShowPasswordCheckboxLabel
                      htmlFor="checkbox"
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      Show Password
                    </LoginFormShowPasswordCheckboxLabel>
                  </LoginFormShowPasswordCard>
                  <LoginFormButton type="submit">Login</LoginFormButton>
                  {isErrorGenerated && (
                    <LoginFormErrorMessage>
                      * {errorMessage}
                    </LoginFormErrorMessage>
                  )}
                </LoginForm>
              )}
            </LoginRouteBgContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default LoginRoute
