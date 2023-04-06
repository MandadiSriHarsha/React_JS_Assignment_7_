import styled from 'styled-components'

export const MobileNavbarBgContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkModeEnabled ? ' #212121' : '#ffffff'};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const MobileNavbarHeaderCard = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 10px 25px 10px;
`

export const MobileNavbarHeaderLogoCard = styled.img`
  width: 90px;
  max-width: 100px;
  @media screen and (min-width: 576px) {
    width: 100px;
    max-width: 115px;
  }
`

export const MobileNavbarHeaderContentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MobileNavbarThemeSwitcherButton = styled.button`
  border: none;
  background: transparent;
  margin: 0px 20px 0px 10px;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const MobileNavbarMenuButton = styled.button`
  border: none;
  background: transparent;
  margin: 0px 20px 0px 10px;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const MobileNavbarLogoutButton = styled.button`
  border: none;
  background: transparent;
  margin: 0px 8px 0px 15px;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const PopupContentCard = styled.div`
  width: 90%;
  max-width: 700px;
  margin: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#212121' : '#ffffff'};
  box-shadow: ${props =>
    props.isDarkModeEnabled ? 'none' : '0px 8px 50px rgba(7, 7, 7, 0.08)'};
  border-radius: 10px;
  padding: 30px 40px 30px 40px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${props => (props.isDarkModeEnabled ? 'none' : '2px solid #f1f5f9')};
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#212121')};
  font-size: 18px;
  text-align: center;
  padding: 10px 0px 15px 0px;
  margin: 0px 0px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const PopupButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 10px 0px;
`

export const PopupCancelButton = styled.button`
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  border: ${props =>
    props.isDarkModeEnabled ? '2px solid #ffffff' : '2px solid #000000'};
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto';
  padding: 8px 17px 8px 17px;
  font-weight: 500;
  margin: 0px 10px 0px 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const PopupLogoutButton = styled.button`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  margin: 0px 10px 0px 10px;
  background-color: #4f46e5;
  border-radius: 8px;
  font-family: 'Roboto';
  padding: 9px 17px 9px 17px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const DesktopNavbar = styled.div`
  height: 10vh;
  width: 100%;
  padding: 30px 20px 25px 20px;
  margin: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? ' #212121' : '#ffffff'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const DesktopNavbarHeaderCard = styled.div`
  display: flex;
  cursor: pointer;
  outline: none;
`

export const DesktopNavbarLogo = styled.img`
  width: 120px;
  max-width: 130px;
  margin: 0px 0px 0px 10px;
`

export const DesktopNavbarContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
`

export const DesktopNavbarThemeSwitcherButton = styled.button`
  border: none;
  background: transparent;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
  font-size: 25px;
  margin: 6px 0px 0px 10px;
`

export const DesktopNavbarProfileCard = styled.img`
  width: 33px;
  max-width: 43px;
  margin: 0px 35px 0px 35px;
  cursor: pointer;
  outline: none;
`

export const DesktopNavbarLogoutButton = styled.button`
  border: none;
  background: transparent;
  padding: 6px 15px 6px 15px;
  margin: 0px 25px 0px 0px;
  font-family: 'Roboto';
  border: ${props =>
    props.isDarkModeEnabled ? '2px solid #ffffff' : '2px solid #3b82f6'};
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#3b82f6')};
  border-radius: 6px;
`
