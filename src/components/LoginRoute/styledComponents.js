import styled from 'styled-components'

export const LoginRouteBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-height: 1100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 25px 0px 25px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#181818' : '#ffffff'};
`

export const LoginForm = styled.form`
  width: 100%;
  max-width: 435px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 37px 23px 37px 23px;
  box-shadow: ${props =>
    props.isDarkModeEnabled ? 'none' : '0px 8px 50px rgba(7, 7, 7, 0.08)'};
  border-radius: 10px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#ffffff'};
  border: ${props =>
    props.isDarkModeEnabled ? '0px solid' : '1px solid #f4f4f4'};
`

export const LoginFormLogo = styled.img`
  width: 70%;
  max-width: 143px;
  align-self: center;
  margin: 0px 0px 30px 0px;
  padding: 0px 0px 0px 0px;
`

export const LoginFormUsernameLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 8px 0px;
  text-align: left;
  font-weight: 500;
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const LoginFormUsernameInput = styled.input`
  width: 100%;
  color: #000000;
  margin: 0px 0px 30px 0px;
  padding: 12px 0px 12px 15px;
  background-color: ${props =>
    props.value !== '' ? '#f1f5f9' : 'transparent'};
  font-size: 15px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  caret-color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#000000')};
  border: ${props =>
    props.isDarkModeEnabled ? '2px solid #424242' : '2px solid #cbd5e1'};
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    padding: 11px 0px 11px 15px;
    font-size: 17px;
  }
`

export const LoginFormPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 8px 0px;
  text-align: left;
  font-weight: 500;
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const LoginFormPasswordInput = styled.input`
  width: 100%;
  color: #000000;
  margin: 0px 0px 30px 0px;
  padding: 10px 0px 10px 13px;
  background-color: ${props =>
    props.value !== '' ? '#f1f5f9' : 'transparent'};
  font-size: 15px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  caret-color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#000000')};
  border: ${props =>
    props.isDarkModeEnabled ? '2px solid #424242' : '2px solid #cbd5e1'};
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    padding: 11px 0px 11px 15px;
    font-size: 17px;
  }
`

export const LoginFormShowPasswordCard = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Roboto';
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 25px 0px;
`

export const LoginFormShowPasswordCheckbox = styled.input`
  background-color: #ffffff;
  height: 18px;
  width: 18px;
  cursor: pointer;
  outline: none;
  margin: 0px 8px 0px 0px;
  border: none;
  background-color: #ffffff;
  border-radius: 8px;
  @media screen and (min-width: 992px) {
    height: 19px;
    width: 19px;
  }
`

export const LoginFormShowPasswordCheckboxLabel = styled.label`
  cursor: pointer;
  outline: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const LoginFormButton = styled.button`
  width: 100%;
  margin: 0px 0px 6px 0px;
  padding: 11px 13px 11px 13px;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  font-family: 'Roboto';
  background-color: #3b82f6;
  @media screen and (min-width: 768px) {
    padding: 11px 15px 11px 15px;
  }
`

export const LoginFormErrorMessage = styled.p`
  font-family: 'Roboto';
  text-align: left;
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
  color: #ff0b37;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
