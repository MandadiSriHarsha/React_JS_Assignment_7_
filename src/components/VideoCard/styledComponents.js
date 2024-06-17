import styled from 'styled-components'

export const VideoCardLinkItem = styled.li`
  width: 90%;
  margin: 0px 20px 15px 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 330px;
  font-size: 14px;
  border-radius: 10px;
  @media screen and (min-width: 576px) {
    min-height: 340px;
    width: 42%;
    max-width: 380px;
    margin: 0px 12px 40px 12px;
  }
  @media screen and (min-width: 768px) {
    min-height: 350px;
    font-size: 16px;
  }
  @media screen and (min-width: 992px) {
    min-height: 360px;
  }
  @media screen and (min-width: 1200px) {
    min-height: 370px;
  }
  &:hover {
    padding: 7px;
    border: ${props =>
      props.isDarkModeEnabled ? `2px solid #383838` : `2px solid #c9c9c9`};
    box-shadow: ${props =>
      props.isDarkModeEnabled
        ? `0px 8px 50px rgba(252, 249, 249, 0.17)`
        : `0px 8px 50px rgba(7, 7, 7, 0.3)`};
  }
`

export const VideoCardItem = styled.div`
  list-style-type: none;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 4px;
  margin: 0px 0px 10px 0px;
  max-height: 200px;
`

export const VideoCardDetailsCard = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 0px 0px 0px;
  padding: 13px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelLogoCard = styled.img`
  width: 25px;
  @media screen and (min-width: 768px) {
    width: 35px;
  }
`

export const ChannelContentCard = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 10px;
  height: 100%;
`

export const VideoTitle = styled.p`
  text-align: left;
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 0px 0px;
  color: ${props => (props.isDarkModeEnabled ? '#f1f1f1' : '#424242')};
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  text-align: left;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 10px 0px;
`

export const VideoExtraDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
`

export const ViewCount = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
`

export const PublishedDate = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 10px;
`
