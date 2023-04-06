import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import LoaderCard from '../LoaderCard'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import OtherPagesVideoCard from '../OtherPagesVideoCard'

import {
  TrendingPageMainCard,
  TrendingPageDisplayCard,
  TrendingPageHeaderCard,
  TrendingPageLogoCard,
  TrendingPageHeading,
  TrendingPageVideosListCard,
  TrendingPageErrorCard,
  TrendingPageErrorCardImage,
  TrendingPageErrorCardHeading,
  TrendingPageErrorCardDescription,
  TrendingPageErrorCardButton,
} from './styledComponents'

const trendingRouteApiConstants = {
  isLoading: 'LOADING',
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {trendingRouteVideosList: [], trendingRoutePageStatus: 'INITIAL'}

  componentDidMount() {
    this.getTrendingRouteList()
  }

  getTrendingRouteList = async () => {
    this.setState({
      trendingRoutePageStatus: trendingRouteApiConstants.isLoading,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      const {videos} = data
      const updatedList = videos.map(eachitem => ({
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
        trendingRouteVideosList: updatedList,
        trendingRoutePageStatus: trendingRouteApiConstants.isSuccess,
      })
    } else {
      this.setState({
        trendingRoutePageStatus: trendingRouteApiConstants.isFailure,
      })
    }
  }

  getTrendingPageContentCard = isDarkModeEnabled => {
    const {trendingRouteVideosList, trendingRoutePageStatus} = this.state
    return (
      <>
        {trendingRoutePageStatus === 'SUCCESS' ? (
          <TrendingPageVideosListCard isDarkModeEnabled={isDarkModeEnabled}>
            {trendingRouteVideosList.map(eachitem => (
              <OtherPagesVideoCard key={eachitem.id} data={eachitem} />
            ))}
          </TrendingPageVideosListCard>
        ) : (
          <TrendingPageErrorCard isDarkModeEnabled={isDarkModeEnabled}>
            <TrendingPageErrorCardImage
              src={
                isDarkModeEnabled
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <TrendingPageErrorCardHeading isDarkModeEnabled={isDarkModeEnabled}>
              Oops! Something Went Wrong
            </TrendingPageErrorCardHeading>
            <TrendingPageErrorCardDescription
              isDarkModeEnabled={isDarkModeEnabled}
            >
              We are having some trouble to complete your request. Please try
              again.
            </TrendingPageErrorCardDescription>
            <TrendingPageErrorCardButton
              isDarkModeEnabled={isDarkModeEnabled}
              type="button"
              onClick={this.getTrendingRouteList}
            >
              Retry
            </TrendingPageErrorCardButton>
          </TrendingPageErrorCard>
        )}
      </>
    )
  }

  getTrendingPageCard = () => {
    const {trendingRoutePageStatus} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <TrendingPageMainCard isDarkModeEnabled={isDarkModeEnabled}>
              <Sidebar />
              <TrendingPageDisplayCard isDarkModeEnabled={isDarkModeEnabled}>
                <TrendingPageHeaderCard isDarkModeEnabled={isDarkModeEnabled}>
                  <TrendingPageLogoCard isDarkModeEnabled={isDarkModeEnabled}>
                    <HiFire />
                  </TrendingPageLogoCard>
                  <TrendingPageHeading isDarkModeEnabled={isDarkModeEnabled}>
                    Trending
                  </TrendingPageHeading>
                </TrendingPageHeaderCard>
                {trendingRoutePageStatus === 'LOADING' ? (
                  <LoaderCard />
                ) : (
                  this.getTrendingPageContentCard(isDarkModeEnabled)
                )}
              </TrendingPageDisplayCard>
            </TrendingPageMainCard>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <Navbar />
        {this.getTrendingPageCard()}
      </>
    )
  }
}

export default TrendingRoute
