import {withRouter, Link, useLocation} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import {
  MobileNavbarMenuCardList,
  NavbarMobileHomeMenuItem,
  NavbarMobileHomeMenuText,
  NavbarMobileTrendingMenuItem,
  NavbarMobileTrendingMenuText,
  NavbarMobileGamingMenuItem,
  NavbarMobileGamingMenuText,
  NavbarMobileSavedVideosMenuItem,
  NavbarMobileSavedVideosMenuText,
} from './styledComponents'

import './index.css'

function GetMobileLocation() {
  const location = useLocation()
  return location
}

const MobileNavbarMenuCard = props => {
  const {isDarkModeEnabled} = props
  const location = GetMobileLocation()
  const path = location.pathname

  const {match} = props
  const {params} = match
  const {id} = params

  return (
    <MobileNavbarMenuCardList>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: (() => {
            let backgroundColor = null
            if (isDarkModeEnabled === true) {
              if (path === '/' || path === `/videos/${id}`) {
                backgroundColor = '#424242'
              } else {
                backgroundColor = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/' || path === `/videos/${id}`) {
                backgroundColor = '#ebebeb'
              } else {
                backgroundColor = 'none'
              }
            }
            return backgroundColor
          })(),
          border: (() => {
            let style = null
            if (isDarkModeEnabled === true) {
              if (path === '/' || path === `/videos/${id}`) {
                style = '2px solid #8b8b8c'
              } else {
                style = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/' || path === `/videos/${id}`) {
                style = '2px solid lightgray'
              } else {
                style = 'none'
              }
            }
            return style
          })(),
        }}
        className="mobile-nav-link-item"
      >
        <NavbarMobileHomeMenuItem
          isDarkModeEnabled={isDarkModeEnabled}
          isPathActive={path === '/' || path === `/videos/${id}`}
        >
          <AiFillHome />
          <NavbarMobileHomeMenuText
            isDarkModeEnabled={isDarkModeEnabled}
            isPathActive={path === '/' || path === `/videos/${id}`}
          >
            Home
          </NavbarMobileHomeMenuText>
        </NavbarMobileHomeMenuItem>
      </Link>
      <Link
        to="/trending"
        style={{
          textDecoration: 'none',
          backgroundColor: (() => {
            let backgroundColor = null
            if (isDarkModeEnabled === true) {
              if (path === '/trending') {
                backgroundColor = '#424242'
              } else {
                backgroundColor = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/trending') {
                backgroundColor = '#ebebeb'
              } else {
                backgroundColor = 'none'
              }
            }
            return backgroundColor
          })(),
          border: (() => {
            let style = null
            if (isDarkModeEnabled === true) {
              if (path === '/trending' || path === '/trending') {
                style = '2px solid #8b8b8c'
              } else {
                style = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/trending' || path === '/trending') {
                style = '2px solid lightgray'
              } else {
                style = 'none'
              }
            }
            return style
          })(),
        }}
        className="mobile-nav-link-item"
      >
        <NavbarMobileTrendingMenuItem
          isDarkModeEnabled={isDarkModeEnabled}
          isPathActive={path === '/trending'}
        >
          <HiFire />
          <NavbarMobileTrendingMenuText
            isDarkModeEnabled={isDarkModeEnabled}
            isPathActive={path === '/trending'}
          >
            Trending
          </NavbarMobileTrendingMenuText>
        </NavbarMobileTrendingMenuItem>
      </Link>
      <Link
        to="/gaming"
        style={{
          textDecoration: 'none',
          backgroundColor: (() => {
            let backgroundColor = null
            if (isDarkModeEnabled === true) {
              if (path === '/gaming') {
                backgroundColor = '#424242'
              } else {
                backgroundColor = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/gaming') {
                backgroundColor = '#ebebeb'
              } else {
                backgroundColor = 'none'
              }
            }
            return backgroundColor
          })(),
          border: (() => {
            let style = null
            if (isDarkModeEnabled === true) {
              if (path === '/gaming' || path === '/gaming') {
                style = '2px solid #8b8b8c'
              } else {
                style = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/gaming' || path === '/gaming') {
                style = '2px solid lightgray'
              } else {
                style = 'none'
              }
            }
            return style
          })(),
        }}
        className="mobile-nav-link-item"
      >
        <NavbarMobileGamingMenuItem
          isDarkModeEnabled={isDarkModeEnabled}
          isPathActive={path === '/gaming'}
        >
          <SiYoutubegaming />
          <NavbarMobileGamingMenuText
            isDarkModeEnabled={isDarkModeEnabled}
            isPathActive={path === '/gaming'}
          >
            Gaming
          </NavbarMobileGamingMenuText>
        </NavbarMobileGamingMenuItem>
      </Link>
      <Link
        to="/saved-videos"
        style={{
          textDecoration: 'none',
          backgroundColor: (() => {
            let backgroundColor = null
            if (isDarkModeEnabled === true) {
              if (path === '/saved-videos') {
                backgroundColor = '#424242'
              } else {
                backgroundColor = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/saved-videos') {
                backgroundColor = '#ebebeb'
              } else {
                backgroundColor = 'none'
              }
            }
            return backgroundColor
          })(),
          border: (() => {
            let style = null
            if (isDarkModeEnabled === true) {
              if (path === '/saved-videos' || path === '/saved-videos') {
                style = '2px solid #8b8b8c'
              } else {
                style = 'none'
              }
            } else if (isDarkModeEnabled === false) {
              if (path === '/saved-videos' || path === '/saved-videos') {
                style = '2px solid lightgray'
              } else {
                style = 'none'
              }
            }
            return style
          })(),
        }}
        className="mobile-nav-link-item"
      >
        <NavbarMobileSavedVideosMenuItem
          isDarkModeEnabled={isDarkModeEnabled}
          isPathActive={path === '/saved-videos'}
        >
          <MdPlaylistAdd />
          <NavbarMobileSavedVideosMenuText
            isDarkModeEnabled={isDarkModeEnabled}
            isPathActive={path === '/saved-videos'}
          >
            Saved Videos
          </NavbarMobileSavedVideosMenuText>
        </NavbarMobileSavedVideosMenuItem>
      </Link>
    </MobileNavbarMenuCardList>
  )
}

export default withRouter(MobileNavbarMenuCard)
