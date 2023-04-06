import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import OtherPagesVideoCard from '../OtherPagesVideoCard'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import LoaderCard from '../LoaderCard'

import {
  SavedVideosRouteBgContainer,
  SavedRoute,
  SavedVideosHeaderCard,
  SavedVideosLogoCard,
  SavedVideosHeading,
  SavedVideosListBgContainer,
  SavedVideosNoVideosBgContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  NoSavedVideosButton,
} from './styledComponents'

class SavedVideosRoute extends Component {
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

  renderSavedVideosMainCard = (savedVideosList, isDarkModeEnabled) => (
    <>
      {savedVideosList.length > 0 ? (
        <SavedRoute>
          <SavedVideosHeaderCard isDarkModeEnabled={isDarkModeEnabled}>
            <SavedVideosLogoCard isDarkModeEnabled={isDarkModeEnabled}>
              <MdPlaylistAdd />
            </SavedVideosLogoCard>
            <SavedVideosHeading isDarkModeEnabled={isDarkModeEnabled}>
              Saved Videos
            </SavedVideosHeading>
          </SavedVideosHeaderCard>
          <SavedVideosListBgContainer isDarkModeEnabled={isDarkModeEnabled}>
            {savedVideosList.map(eachitem => (
              <OtherPagesVideoCard key={eachitem.id} data={eachitem} />
            ))}
          </SavedVideosListBgContainer>
        </SavedRoute>
      ) : (
        <SavedVideosNoVideosBgContainer isDarkModeEnabled={isDarkModeEnabled}>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading isDarkModeEnabled={isDarkModeEnabled}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosDescription isDarkModeEnabled={isDarkModeEnabled}>
            You can save your videos while watching them
          </NoSavedVideosDescription>
          <NoSavedVideosButton
            isDarkModeEnabled={isDarkModeEnabled}
            type="button"
            onClick={this.navigateToHome}
          >
            Home
          </NoSavedVideosButton>
        </SavedVideosNoVideosBgContainer>
      )}
    </>
  )

  render() {
    const {isLoaderLoading} = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {savedVideosList, isDarkModeEnabled} = value
          return (
            <>
              <Navbar />
              <SavedVideosRouteBgContainer
                isDarkModeEnabled={isDarkModeEnabled}
                data-testid="savedVideos"
              >
                <Sidebar />
                {isLoaderLoading ? (
                  <LoaderCard />
                ) : (
                  this.renderSavedVideosMainCard(
                    savedVideosList,
                    isDarkModeEnabled,
                  )
                )}
              </SavedVideosRouteBgContainer>
            </>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default SavedVideosRoute
