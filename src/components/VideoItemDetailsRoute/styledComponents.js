import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const VideoItemDetailsDisplayCard = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const VideoItemPageErrorCard = styled.div`
  font-family: 'Roboto';
  height: 100%;
  width: 100%;
  overflow-y: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 50px 30px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
`

export const VideoItemPageErrorCardImage = styled.img`
  width: 90%;
  max-width: 350px;
  align-self: center;
`

export const VideoItemPageErrorCardHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#231f20')};
  font-size: 23px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 20px 0px 20px 0px;
`

export const VideoItemPageErrorCardDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#616e7c')};
  font-size: 16px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
`

export const VideoItemPageErrorCardButton = styled.button`
  padding: 9px 16px 9px 16px;
  margin: 0px 0px 0px 0px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
`

export const VideoItemDetailsSuccessCard = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 40px 0px;
  @media screen and (min-width: 768px) {
    padding: 20px 15px 40px 15px;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-radius: 5px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkModeEnabled ? '#f8fafc' : '#231f20')};
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 20px 20px 0px 15px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoDetailsContentCardOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto';
  width: 100%;
  margin: 0px 0px 0px 0px;
  padding: 23px 20px 0px 15px;
  font-size: 14px;
  color: ${props => (props.isDarkModeEnabled ? ' #cccccc' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoDetailsViewsAndDateCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  margin: 0px 0px 15px 0px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 0px 0px;
    font-size: 16px;
  }
`

export const VideoDetailsViews = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#7e858e' : '#606060')};
  margin: 0px 0px 0px 0px;
  padding: 0px 6px 0px 0px;
`

export const VideoDetailsDate = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#7e858e' : '#606060')};
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 6px;
`

export const VideoDetailsLikeAndDislikeCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
`

export const VideoDetailsLikeCard = styled.button`
  color: ${props => {
    let colorValue
    if (props.isDarkModeEnabled === true) {
      if (props.isVideoLiked === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = ' #7e858e'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isVideoLiked === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = '#606060'
      }
    }
    return colorValue
  }};
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  font-weight: ${props => (props.isVideoLiked ? 'bold' : 400)};
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoDetailsDislikeCard = styled.button`
  color: ${props => {
    let colorValue
    if (props.isDarkModeEnabled === true) {
      if (props.isVideoDisliked === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = ' #7e858e'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isVideoDisliked === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = '#606060'
      }
    }
    return colorValue
  }};
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  font-weight: ${props => (props.isVideoDisliked ? 'bold' : 400)};
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoDetailsSavedCard = styled.button`
  color: ${props => {
    let colorValue
    if (props.isDarkModeEnabled === true) {
      if (props.isVideoSaved === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = ' #7e858e'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isVideoSaved === true) {
        colorValue = '#2563eb'
      } else {
        colorValue = '#606060'
      }
    }
    return colorValue
  }};
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  background: transparent;
  font-size: 16px;
  font-weight: ${props => (props.isVideoSaved ? 'bold' : 400)};
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const LineBreaker = styled.hr`
  width: 97%;
  background-color: #cbd5e1;
  border: 1px solid #cbd5e1;
  margin: 25px 0px 25px 0px;
  align-self: center;
`

export const VideoDetailsContentCardTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 23px 20px 0px 15px;
`

export const VideoDetailsChannelLogo = styled.img`
  margin: 0px 20px 0px 0px;
  width: 40px;
  @media screen and (min-width: 576px) {
    max-width: 55px;
  }
`

export const VideoDetailsChannelContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
`

export const VideoDetailsChannelName = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 8px 0px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#7e858e' : '#606060')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const VideoDetailsChannelSubscribers = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 23px 0px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#909090' : '#64748b')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const VideoDetailsChannelDesktopDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 25px 0px;
  display: none;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#cccccc' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
    display: flex;
  }
`

export const VideoDetailsChannelMobileDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 20px 25px 20px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#cccccc' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
    display: none;
  }
`
