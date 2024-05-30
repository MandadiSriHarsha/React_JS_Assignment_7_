import {Link, useLocation, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  Sidebar,
  SidebarMenuCard,
  SidebarHomeItem,
  SidebarHomeItemText,
  SidebarTrendingItem,
  SidebarTrendingItemText,
  SidebarGamingItem,
  SidebarGamingItemText,
  SidebarSavedVideosItem,
  SidebarSavedVideosItemText,
  SidebarContactUsCard,
  SidebarContactUsHeading,
  SidebarImagesCard,
  SidebarImage,
  SidebarContactUsDescription,
} from './styledComponents'

import './index.css'

const AppSidebar = props => {
  const location = useLocation()
  const path = location.pathname

  const {match} = props
  const {params} = match
  const {id} = params

  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkModeEnabled} = value
        const hoverClass = isDarkModeEnabled
          ? 'dark-hover-class'
          : 'light-hover-class'
        return (
          <Sidebar isDarkModeEnabled={isDarkModeEnabled}>
            <SidebarMenuCard>
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
                className={`sidebar-menu-link-item ${hoverClass}`}
              >
                <SidebarHomeItem
                  isDarkModeEnabled={isDarkModeEnabled}
                  isPathActive={path === '/' || path === `/videos/${id}`}
                >
                  <AiFillHome />
                  <SidebarHomeItemText
                    isDarkModeEnabled={isDarkModeEnabled}
                    isPathActive={path === '/' || path === `/videos/${id}`}
                  >
                    Home
                  </SidebarHomeItemText>
                </SidebarHomeItem>
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
                className={`sidebar-menu-link-item ${hoverClass}`}
              >
                <SidebarTrendingItem
                  isDarkModeEnabled={isDarkModeEnabled}
                  isPathActive={path === '/trending'}
                >
                  <HiFire />
                  <SidebarTrendingItemText
                    isDarkModeEnabled={isDarkModeEnabled}
                    isPathActive={path === '/trending'}
                  >
                    Trending
                  </SidebarTrendingItemText>
                </SidebarTrendingItem>
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
                className={`sidebar-menu-link-item ${hoverClass}`}
              >
                <SidebarGamingItem
                  isDarkModeEnabled={isDarkModeEnabled}
                  isPathActive={path === '/gaming'}
                >
                  <SiYoutubegaming />
                  <SidebarGamingItemText
                    isDarkModeEnabled={isDarkModeEnabled}
                    isPathActive={path === '/gaming'}
                  >
                    Gaming
                  </SidebarGamingItemText>
                </SidebarGamingItem>
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
                      if (
                        path === '/saved-videos' ||
                        path === '/saved-videos'
                      ) {
                        style = '2px solid #8b8b8c'
                      } else {
                        style = 'none'
                      }
                    } else if (isDarkModeEnabled === false) {
                      if (
                        path === '/saved-videos' ||
                        path === '/saved-videos'
                      ) {
                        style = '2px solid lightgray'
                      } else {
                        style = 'none'
                      }
                    }
                    return style
                  })(),
                }}
                className={`sidebar-menu-link-item ${hoverClass}`}
              >
                <SidebarSavedVideosItem
                  isDarkModeEnabled={isDarkModeEnabled}
                  isPathActive={path === '/saved-videos'}
                >
                  <MdPlaylistAdd />
                  <SidebarSavedVideosItemText
                    isDarkModeEnabled={isDarkModeEnabled}
                    isPathActive={path === '/saved-videos'}
                  >
                    Saved Videos
                  </SidebarSavedVideosItemText>
                </SidebarSavedVideosItem>
              </Link>
            </SidebarMenuCard>
            <SidebarContactUsCard>
              <SidebarContactUsHeading isDarkModeEnabled={isDarkModeEnabled}>
                CONTACT US
              </SidebarContactUsHeading>
              <SidebarImagesCard>
                <a
                  className="external-website-link"
                  rel="noreferrer"
                  href="https://www.facebook.com"
                  target="_blank"
                  style={{textDecoration: 'none'}}
                >
                  <SidebarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                </a>
                <a
                  className="external-website-link"
                  rel="noreferrer"
                  href="https://www.twitter.com"
                  target="_blank"
                  style={{textDecoration: 'none'}}
                >
                  <SidebarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                </a>
                <a
                  className="external-website-link"
                  rel="noreferrer"
                  href="https://www.linkedin.com"
                  target="_blank"
                  style={{textDecoration: 'none'}}
                >
                  <SidebarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </a>
              </SidebarImagesCard>
              <SidebarContactUsDescription
                isDarkModeEnabled={isDarkModeEnabled}
              >
                Enjoy! Now to see your channels and recommendations!
              </SidebarContactUsDescription>
            </SidebarContactUsCard>
          </Sidebar>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default withRouter(AppSidebar)
