import {Component} from 'react'

import ReactPlayer from 'react-player/lazy'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import {BsDot} from 'react-icons/bs'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {MdPlaylistAdd} from 'react-icons/md'

import LoaderCard from '../LoaderCard'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  VideoItemDetailsBgContainer,
  VideoItemDetailsDisplayCard,
  VideoItemPageErrorCard,
  VideoItemPageErrorCardImage,
  VideoItemPageErrorCardHeading,
  VideoItemPageErrorCardDescription,
  VideoItemPageErrorCardButton,
  VideoItemDetailsSuccessCard,
  VideoContainer,
  VideoTitle,
  VideoDetailsContentCardOne,
  VideoDetailsViewsAndDateCard,
  VideoDetailsViews,
  VideoDetailsDate,
  VideoDetailsLikeAndDislikeCard,
  VideoDetailsLikeCard,
  VideoDetailsDislikeCard,
  VideoDetailsSavedCard,
  LineBreaker,
  VideoDetailsContentCardTwo,
  VideoDetailsChannelLogo,
  VideoDetailsChannelContentCard,
  VideoDetailsChannelName,
  VideoDetailsChannelSubscribers,
  VideoDetailsChannelDesktopDescription,
  VideoDetailsChannelMobileDescription,
} from './styledComponents'

import './index.css'

const videoItemDetailsRouteApiConstants = {
  isLoading: 'LOADING',
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
}

const controlsValue = true

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: {},
    videoDetailsPageStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getUpdatedDate = publishedAt => {
    const date = new Date(publishedAt)
    const newDate = formatDistanceToNow(
      new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    )
    const array = newDate.split('')
    const year = array.filter(eachitem => parseInt(eachitem))
    return year
  }

  getVideoItemDetails = async () => {
    this.setState({
      videoDetailsPageStatus: videoItemDetailsRouteApiConstants.isLoading,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedVideoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscribersCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: this.getUpdatedDate(data.video_details.published_at),
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        videoDetailsPageStatus: videoItemDetailsRouteApiConstants.isSuccess,
      })
    } else {
      this.setState({
        videoDetailsPageStatus: videoItemDetailsRouteApiConstants.isFailure,
      })
    }
  }

  videoItemDetailsFailureCard = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkModeEnabled} = value
        return (
          <VideoItemPageErrorCard isDarkModeEnabled={isDarkModeEnabled}>
            <VideoItemPageErrorCardImage
              src={
                isDarkModeEnabled
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <VideoItemPageErrorCardHeading
              isDarkModeEnabled={isDarkModeEnabled}
            >
              Oops! Something Went Wrong
            </VideoItemPageErrorCardHeading>
            <VideoItemPageErrorCardDescription
              isDarkModeEnabled={isDarkModeEnabled}
            >
              We are having some trouble to complete your request. Please try
              again.
            </VideoItemPageErrorCardDescription>
            <VideoItemPageErrorCardButton
              isDarkModeEnabled={isDarkModeEnabled}
              type="button"
              onClick={this.getVideoItemDetails}
            >
              Retry
            </VideoItemPageErrorCardButton>
          </VideoItemPageErrorCard>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  videoItemDetailsSuccessCard = () => {
    const {videoDetails} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {
            isDarkModeEnabled,
            onSaveVideo,
            onUnSaveVideo,
            savedVideosList,
            onLikeVideo,
            onDislikeVideo,
            videosReactionList,
          } = value
          const videoItem = savedVideosList.filter(
            eachitem => eachitem.id === videoDetails.id,
          )
          const isVideoSavedValue = () => {
            let saveValue
            if (videoItem.length === 0) {
              saveValue = false
            } else if (videoItem.length !== 0) {
              if (videoItem[0].isVideoSaved === true) {
                saveValue = true
              } else {
                saveValue = false
              }
            }
            return saveValue
          }
          const saveVideo = () => {
            onSaveVideo(videoDetails)
          }
          const unSaveVideo = () => {
            onUnSaveVideo(videoDetails.id)
          }
          const likeVideo = () => {
            onLikeVideo(videoDetails.id)
          }
          const dislikeVideo = () => {
            onDislikeVideo(videoDetails.id)
          }
          const likeItem = videosReactionList.filter(
            eachitem => eachitem.id === videoDetails.id,
          )
          const likeReactionStatus = () => {
            let likeValue
            if (likeItem.length === 0) {
              likeValue = false
            } else if (likeItem.length !== 0) {
              if (likeItem[0].isVideoLiked === true) {
                likeValue = true
              } else {
                likeValue = false
              }
            }
            return likeValue
          }
          const dislikeItem = videosReactionList.filter(
            eachitem => eachitem.id === videoDetails.id,
          )
          const dislikeReactionStatus = () => {
            let dislikeValue
            if (dislikeItem.length === 0) {
              dislikeValue = false
            } else if (dislikeItem.length !== 0) {
              if (dislikeItem[0].isVideoDisLiked === true) {
                dislikeValue = true
              } else {
                dislikeValue = false
              }
            }
            return dislikeValue
          }
          const checkValue = isVideoSavedValue()
          const likeValue = likeReactionStatus()
          const dislikeValue = dislikeReactionStatus()
          return (
            <VideoItemDetailsSuccessCard isDarkModeEnabled={isDarkModeEnabled}>
              <VideoContainer>
                <ReactPlayer
                  url={videoDetails.videoUrl}
                  width="100%"
                  className="video-player"
                  controls={controlsValue}
                />
              </VideoContainer>
              <VideoTitle isDarkModeEnabled={isDarkModeEnabled}>
                {videoDetails.title}
              </VideoTitle>
              <VideoDetailsContentCardOne isDarkModeEnabled={isDarkModeEnabled}>
                <VideoDetailsViewsAndDateCard
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  <VideoDetailsViews isDarkModeEnabled={isDarkModeEnabled}>
                    {videoDetails.viewCount} views
                  </VideoDetailsViews>
                  <BsDot color={isDarkModeEnabled ? '#7e858e' : '#606060'} />
                  <VideoDetailsDate isDarkModeEnabled={isDarkModeEnabled}>
                    {videoDetails.publishedAt} years ago
                  </VideoDetailsDate>
                </VideoDetailsViewsAndDateCard>
                <VideoDetailsLikeAndDislikeCard
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  <VideoDetailsLikeCard
                    type="button"
                    onClick={likeVideo}
                    isVideoLiked={likeValue}
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    <AiOutlineLike /> Like
                  </VideoDetailsLikeCard>
                  <VideoDetailsDislikeCard
                    type="button"
                    onClick={dislikeVideo}
                    isVideoDisliked={dislikeValue}
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    <AiOutlineDislike /> Dislike
                  </VideoDetailsDislikeCard>
                  {checkValue ? (
                    <VideoDetailsSavedCard
                      type="button"
                      onClick={unSaveVideo}
                      isVideoSaved={checkValue}
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      <MdPlaylistAdd /> Saved
                    </VideoDetailsSavedCard>
                  ) : (
                    <VideoDetailsSavedCard
                      type="button"
                      onClick={saveVideo}
                      isVideoSaved={checkValue}
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      <MdPlaylistAdd /> Save
                    </VideoDetailsSavedCard>
                  )}
                </VideoDetailsLikeAndDislikeCard>
              </VideoDetailsContentCardOne>
              <LineBreaker />
              <VideoDetailsContentCardTwo isDarkModeEnabled={isDarkModeEnabled}>
                <VideoDetailsChannelLogo
                  src={videoDetails.channel.profileImageUrl}
                  alt="channel"
                />
                <VideoDetailsChannelContentCard
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  <VideoDetailsChannelName
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    {videoDetails.channel.name}
                  </VideoDetailsChannelName>
                  <VideoDetailsChannelSubscribers
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    {videoDetails.channel.subscribersCount} Subscribers
                  </VideoDetailsChannelSubscribers>
                  <VideoDetailsChannelDesktopDescription
                    isDarkModeEnabled={isDarkModeEnabled}
                  >
                    {videoDetails.description}
                  </VideoDetailsChannelDesktopDescription>
                </VideoDetailsChannelContentCard>
              </VideoDetailsContentCardTwo>
              <VideoDetailsChannelMobileDescription
                isDarkModeEnabled={isDarkModeEnabled}
              >
                {videoDetails.description}
              </VideoDetailsChannelMobileDescription>
            </VideoItemDetailsSuccessCard>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  getVideoCard = () => {
    const {videoDetailsPageStatus} = this.state
    switch (videoDetailsPageStatus) {
      case videoItemDetailsRouteApiConstants.isLoading:
        return <LoaderCard />
      case videoItemDetailsRouteApiConstants.isSuccess:
        return this.videoItemDetailsSuccessCard()
      case videoItemDetailsRouteApiConstants.isFailure:
        return this.videoItemDetailsFailureCard()
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
              <VideoItemDetailsBgContainer
                isDarkModeEnabled={isDarkModeEnabled}
              >
                <Sidebar />
                <VideoItemDetailsDisplayCard
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  {this.getVideoCard()}
                </VideoItemDetailsDisplayCard>
              </VideoItemDetailsBgContainer>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
