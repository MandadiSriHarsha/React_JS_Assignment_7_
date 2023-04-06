import {Component} from 'react'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import LoaderCard from '../LoaderCard'

import {
  NotFoundDisplayCard,
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
} from './styledComponents'

class NotFoundRoute extends Component {
  state = {isLoaderLoading: true}

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoaderLoading: false})
    }, 1000)
  }

  navigateToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isLoaderLoading} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <>
              <Navbar />
              <NotFoundDisplayCard isDarkModeEnabled={isDarkModeEnabled}>
                <Sidebar />
                {isLoaderLoading ? (
                  <LoaderCard />
                ) : (
                  <NotFoundBgContainer isDarkModeEnabled={isDarkModeEnabled}>
                    <NotFoundImage
                      src={
                        isDarkModeEnabled
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    />
                    <NotFoundHeading isDarkModeEnabled={isDarkModeEnabled}>
                      Page Not Found
                    </NotFoundHeading>
                    <NotFoundDescription isDarkModeEnabled={isDarkModeEnabled}>
                      We are sorry, the page you requested could not be found.
                    </NotFoundDescription>
                    <NotFoundButton type="button" onClick={this.navigateToHome}>
                      Navigate To Home
                    </NotFoundButton>
                  </NotFoundBgContainer>
                )}
              </NotFoundDisplayCard>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default NotFoundRoute
