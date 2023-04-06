import React from 'react'

const NxtWatchAppContext = React.createContext({
  isDarkModeEnabled: '',
  savedVideosList: [],
  videosReactionList: [],
  onToggleDarkMode: () => {},
  onSaveVideo: () => {},
  onUnSaveVideo: () => {},
  onLikeVideo: () => {},
  onDislikeVideo: () => {},
})

export default NxtWatchAppContext
