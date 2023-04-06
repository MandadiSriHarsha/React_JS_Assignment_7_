import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import {FiMenu, FiSun, FiLogOut} from 'react-icons/fi'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import MobileNavbarMenuCard from '../MobileNavbarMenuCard'

import {
  MobileNavbarBgContainer,
  MobileNavbarHeaderCard,
  MobileNavbarHeaderLogoCard,
  MobileNavbarHeaderContentCard,
  MobileNavbarThemeSwitcherButton,
  MobileNavbarMenuButton,
  MobileNavbarLogoutButton,
  PopupContentCard,
  PopupText,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupLogoutButton,
  DesktopNavbar,
  DesktopNavbarHeaderCard,
  DesktopNavbarLogo,
  DesktopNavbarContentCard,
  DesktopNavbarThemeSwitcherButton,
  DesktopNavbarProfileCard,
  DesktopNavbarLogoutButton,
} from './styledComponents'

class Navbar extends Component {
  state = {
    showMobileMenu: false,
  }

  onToggleMobileMenuCard = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {showMobileMenu} = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled, onToggleDarkMode} = value
          return (
            <>
              <MobileNavbarBgContainer
                isDarkModeEnabled={isDarkModeEnabled}
                data-testid="mobileNavbar"
              >
                <MobileNavbarHeaderCard isDarkModeEnabled={isDarkModeEnabled}>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <MobileNavbarHeaderLogoCard
                      src={
                        isDarkModeEnabled
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </Link>
                  <MobileNavbarHeaderContentCard
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    <MobileNavbarThemeSwitcherButton
                      type="button"
                      data-testid="theme"
                      onClick={onToggleDarkMode}
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      {!isDarkModeEnabled ? <FaMoon /> : <FiSun />}
                    </MobileNavbarThemeSwitcherButton>
                    <MobileNavbarMenuButton
                      type="button"
                      isDarkModeEnabled={isDarkModeEnabled}
                      onClick={this.onToggleMobileMenuCard}
                    >
                      <FiMenu />
                    </MobileNavbarMenuButton>
                    <Popup
                      modal
                      trigger={
                        <MobileNavbarLogoutButton
                          type="button"
                          isDarkModeEnabled={isDarkModeEnabled}
                        >
                          <FiLogOut />
                        </MobileNavbarLogoutButton>
                      }
                    >
                      {close => (
                        <PopupContentCard isDarkModeEnabled={isDarkModeEnabled}>
                          <PopupText isDarkModeEnabled={isDarkModeEnabled}>
                            Are you sure, you want to logout?
                          </PopupText>
                          <PopupButtonsContainer>
                            <PopupCancelButton
                              isDarkModeEnabled={isDarkModeEnabled}
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </PopupCancelButton>
                            <PopupLogoutButton
                              isDarkModeEnabled={isDarkModeEnabled}
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Logout
                            </PopupLogoutButton>
                          </PopupButtonsContainer>
                        </PopupContentCard>
                      )}
                    </Popup>
                  </MobileNavbarHeaderContentCard>
                </MobileNavbarHeaderCard>
                {showMobileMenu && (
                  <MobileNavbarMenuCard isDarkModeEnabled={isDarkModeEnabled} />
                )}
              </MobileNavbarBgContainer>
              <DesktopNavbar
                isDarkModeEnabled={isDarkModeEnabled}
                id="desktopNavbar"
              >
                <DesktopNavbarHeaderCard>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <DesktopNavbarLogo
                      src={
                        isDarkModeEnabled
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </Link>
                </DesktopNavbarHeaderCard>
                <DesktopNavbarContentCard isDarkModeEnabled={isDarkModeEnabled}>
                  <DesktopNavbarThemeSwitcherButton
                    type="button"
                    data-testid="theme"
                    onClick={onToggleDarkMode}
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    {!isDarkModeEnabled ? <FaMoon /> : <FiSun />}
                  </DesktopNavbarThemeSwitcherButton>
                  <DesktopNavbarProfileCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <DesktopNavbarLogoutButton
                        type="button"
                        isDarkModeEnabled={isDarkModeEnabled}
                      >
                        Logout
                      </DesktopNavbarLogoutButton>
                    }
                  >
                    {close => (
                      <PopupContentCard isDarkModeEnabled={isDarkModeEnabled}>
                        <PopupText isDarkModeEnabled={isDarkModeEnabled}>
                          Are you sure, you want to logout?
                        </PopupText>
                        <PopupButtonsContainer>
                          <PopupCancelButton
                            isDarkModeEnabled={isDarkModeEnabled}
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </PopupCancelButton>
                          <PopupLogoutButton
                            isDarkModeEnabled={isDarkModeEnabled}
                            type="button"
                            onClick={this.onClickLogout}
                          >
                            Logout
                          </PopupLogoutButton>
                        </PopupButtonsContainer>
                      </PopupContentCard>
                    )}
                  </Popup>
                </DesktopNavbarContentCard>
              </DesktopNavbar>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
