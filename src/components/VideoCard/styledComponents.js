import styled from 'styled-components'

export const VideoCardItem = styled.div`
  list-style-type: none;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 4px;
  margin: 0px 0px 10px 0px;
`

export const VideoCardDetailsCard = styled.div`
  width: 100%;
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
`

export const VideoTitle = styled.p`
  font-size: 14px;
  text-align: left;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 0px;
  color: ${props => (props.isDarkModeEnabled ? '#f1f1f1' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  text-align: left;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideoExtraDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ViewCount = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 0px;
`

export const PublishedDate = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 10px;
`
