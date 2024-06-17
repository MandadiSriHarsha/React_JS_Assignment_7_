import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsSearch} from 'react-icons/bs'

import NxtWatchPremiumCard from '../NxtWatchPremiumCard'
import LoaderCard from '../LoaderCard'
import Navbar from '../Navbar'
import AppSidebar from '../Sidebar'
import VideoCard from '../VideoCard'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  HomeRouteBgContainer,
  HomeRouteDisplayCard,
  HomePageMainDisplayCard,
  HomePageVideosCard,
  HomePageErrorCard,
  HomePageErrorCardImage,
  HomePageErrorCardHeading,
  HomePageErrorCardDescription,
  HomePageErrorCardButton,
} from './styledComponents'

import './index.css'

class HomeRoute extends Component {
  state = {
    isPremiumCardActive: true,
    searchValue: '',
    homePageVideosList: [],
    homePageStatus: 'LOADING',
  }

  componentDidMount() {
    this.setState({homePageStatus: 'LOADING'}, this.getHomePageList)
  }

  onTogglePremiumCardDisplay = () => {
    this.setState({isPremiumCardActive: false})
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  startSearch = event => {
    if (event.key === 'Enter') {
      this.getHomePageList()
    }
  }

  getHomePageList = async () => {
    const {searchValue} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.videos.map(eachitem => ({
        id: eachitem.id,
        publishedAt: eachitem.published_at,
        thumbnailUrl: eachitem.thumbnail_url,
        title: eachitem.title,
        viewCount: eachitem.view_count,
        channel: {
          name: eachitem.channel.name,
          profileImageUrl: eachitem.channel.profile_image_url,
        },
      }))
      this.setState({
        homePageVideosList: updatedList,
        homePageStatus: 'SUCCESS',
      })
    } else {
      this.setState({homePageStatus: 'FAILURE'})
    }
  }

  getVideosListCard = () => {
    const {homePageVideosList, searchValue} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <HomePageMainDisplayCard isDarkModeEnabled={isDarkModeEnabled}>
              <div className="home-page-search-container">
                <input
                  type="search"
                  value={searchValue}
                  placeholder="Search"
                  onChange={this.onChangeSearchValue}
                  className="search-input"
                  onKeyDown={this.startSearch}
                />
                <button
                  className="search-button"
                  type="button"
                  onClick={this.getHomePageList}
                  aria-label="Search"
                >
                  <BsSearch />
                </button>
              </div>
              {homePageVideosList.length > 0 ? (
                <HomePageVideosCard isDarkModeEnabled={isDarkModeEnabled}>
                  {homePageVideosList.map(eachitem => (
                    <VideoCard key={eachitem.id} data={eachitem} />
                  ))}
                </HomePageVideosCard>
              ) : (
                <HomePageErrorCard isDarkModeEnabled={isDarkModeEnabled}>
                  <HomePageErrorCardImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <HomePageErrorCardHeading
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    No Search results found
                  </HomePageErrorCardHeading>
                  <HomePageErrorCardDescription
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    Try different key words or remove search filter
                  </HomePageErrorCardDescription>
                  <HomePageErrorCardButton
                    isDarkModeEnabled={isDarkModeEnabled}
                    type="button"
                    onClick={this.getHomePageList}
                  >
                    Retry
                  </HomePageErrorCardButton>
                </HomePageErrorCard>
              )}
            </HomePageMainDisplayCard>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  getHomePageFailureCard = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkModeEnabled} = value
        return (
          <HomePageErrorCard isDarkModeEnabled={isDarkModeEnabled}>
            <HomePageErrorCardImage
              src={
                isDarkModeEnabled
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <HomePageErrorCardHeading isDarkModeEnabled={isDarkModeEnabled}>
              Oops! Something Went Wrong
            </HomePageErrorCardHeading>
            <HomePageErrorCardDescription isDarkModeEnabled={isDarkModeEnabled}>
              We are having some trouble to complete your request. Please try
              again.
            </HomePageErrorCardDescription>
            <HomePageErrorCardButton
              isDarkModeEnabled={isDarkModeEnabled}
              type="button"
              onClick={this.getHomePageList}
            >
              Retry
            </HomePageErrorCardButton>
          </HomePageErrorCard>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  displayHomePageContentCard = () => {
    const {homePageStatus} = this.state
    switch (homePageStatus) {
      case 'LOADING':
        return <LoaderCard />
      case 'SUCCESS':
        return this.getVideosListCard()
      case 'FAILURE':
        return this.getHomePageFailureCard()
      default:
        return this.getHomePageFailureCard()
    }
  }

  render() {
    const {isPremiumCardActive} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <>
              <Navbar />
              <HomeRouteBgContainer
                isDarkModeEnabled={isDarkModeEnabled}
                data-testid="homeRoute"
              >
                <AppSidebar />
                <HomeRouteDisplayCard
                  idDarkModeEnabled={isDarkModeEnabled}
                  isPremiumCardActive={isPremiumCardActive}
                >
                  {isPremiumCardActive && (
                    <NxtWatchPremiumCard
                      onTogglePremiumCardDisplay={
                        this.onTogglePremiumCardDisplay
                      }
                      isDarkModeEnabled={isDarkModeEnabled}
                    />
                  )}
                  {this.displayHomePageContentCard()}
                </HomeRouteDisplayCard>
              </HomeRouteBgContainer>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default HomeRoute
