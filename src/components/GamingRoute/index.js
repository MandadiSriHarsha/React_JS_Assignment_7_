import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import LoaderCard from '../LoaderCard'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  GameRouteBgContainer,
  GameRouteMainCard,
  GameRouteDisplayCard,
  GameRouteHeaderCard,
  GameRouteLogoCard,
  GameRouteHeading,
  GamePageErrorCard,
  GamePageErrorCardImage,
  GamePageErrorCardHeading,
  GamePageErrorCardDescription,
  GamePageErrorCardButton,
  GamePageListCardBgContainer,
  GamePageListCard,
  GamePageListCardLogo,
  GamePageListCardHeading,
  GamePageListCardDescription,
} from './styledComponents'

import './index.css'

const gamingRouteApiConstants = {
  isLoading: 'LOADING',
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {gamingRouteVideosList: [], gamePageStatus: 'INITIAL'}

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({gamePageStatus: gamingRouteApiConstants.isLoading})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedList = data.videos.map(eachitem => ({
        id: eachitem.id,
        thumbnailUrl: eachitem.thumbnail_url,
        title: eachitem.title,
        viewCount: eachitem.view_count,
      }))
      this.setState({
        gamingRouteVideosList: updatedList,
        gamePageStatus: gamingRouteApiConstants.isSuccess,
      })
    } else {
      this.setState({gamePageStatus: gamingRouteApiConstants.isFailure})
    }
  }

  gamePageErrorCard = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkModeEnabled} = value
        return (
          <GamePageErrorCard isDarkModeEnabled={isDarkModeEnabled}>
            <GamePageErrorCardImage
              src={
                isDarkModeEnabled
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <GamePageErrorCardHeading isDarkModeEnabled={isDarkModeEnabled}>
              Oops! Something Went Wrong
            </GamePageErrorCardHeading>
            <GamePageErrorCardDescription isDarkModeEnabled={isDarkModeEnabled}>
              We are having some trouble to complete your request. Please try
              again.
            </GamePageErrorCardDescription>
            <GamePageErrorCardButton
              isDarkModeEnabled={isDarkModeEnabled}
              type="button"
              onClick={this.getGamingVideosList}
            >
              Retry
            </GamePageErrorCardButton>
          </GamePageErrorCard>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  gamePageSuccessCard = () => {
    const {gamingRouteVideosList} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <GamePageListCardBgContainer isDarkModeEnabled={isDarkModeEnabled}>
              {gamingRouteVideosList.map(eachitem => (
                <Link
                  key={eachitem.id}
                  to={`/videos/${eachitem.id}`}
                  className="game-page-link-item"
                >
                  <GamePageListCard isDarkModeEnabled={isDarkModeEnabled}>
                    <GamePageListCardLogo
                      src={eachitem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GamePageListCardHeading
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      {eachitem.title}
                    </GamePageListCardHeading>
                    <GamePageListCardDescription>
                      {eachitem.viewCount} Watching Worldwide
                    </GamePageListCardDescription>
                  </GamePageListCard>
                </Link>
              ))}
            </GamePageListCardBgContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  getGamingRouteContentcard = () => {
    const {gamePageStatus} = this.state
    switch (gamePageStatus) {
      case gamingRouteApiConstants.isLoading:
        return <LoaderCard />
      case gamingRouteApiConstants.isSuccess:
        return this.gamePageSuccessCard()
      case gamingRouteApiConstants.isFailure:
        return this.gamePageErrorCard()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <>
              <Navbar />
              <GameRouteBgContainer isDarkModeEnabled={isDarkModeEnabled}>
                <GameRouteMainCard isDarkModeEnabled={isDarkModeEnabled}>
                  <Sidebar />
                  <GameRouteDisplayCard isDarkModeEnabled={isDarkModeEnabled}>
                    <GameRouteHeaderCard isDarkModeEnabled={isDarkModeEnabled}>
                      <GameRouteLogoCard isDarkModeEnabled={isDarkModeEnabled}>
                        <SiYoutubegaming />
                      </GameRouteLogoCard>
                      <GameRouteHeading isDarkModeEnabled={isDarkModeEnabled}>
                        Gaming
                      </GameRouteHeading>
                    </GameRouteHeaderCard>
                    {this.getGamingRouteContentcard()}
                  </GameRouteDisplayCard>
                </GameRouteMainCard>
              </GameRouteBgContainer>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default GamingRoute
