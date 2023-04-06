import styled from 'styled-components'

export const TrendingVideoCardItem = styled.div`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`

export const TrendingVideoThumbnail = styled.img`
  border-radius: 4px;
  margin: 0px 0px 10px 0px;
  height: 250px;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 300px;
    height: 170px;
    margin: 0px 10px 0px 0px;
  }
`

export const TrendingVideoCardDetailsCard = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 13px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const TrendingChannelLogoCard = styled.img`
  width: 35px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingChannelContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 20px;
`

export const TrendingVideoTitle = styled.p`
  font-size: 14px;
  text-align: left;
  font-family: 'Roboto';
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 0px;
  color: ${props => (props.isDarkModeEnabled ? '#f1f1f1' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const TrendingChannelNameOne = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  text-align: left;
  padding: 0px 10px 10px 0px;
  margin: 0px 0px 0px 0px;
  display: none;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    display: flex;
    font-size: 16px;
  }
`

export const TrendingChannelNameTwo = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkModeEnabled ? '#94a3b8' : '#64748b')};
  text-align: left;
  font-family: 'Roboto';
  padding: 0px 10px 0px 0px;
  margin: 0px 0px 0px 0px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingVideoExtraDetailsCard = styled.div`
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

export const TrendingViewCount = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    padding: 0px 10px 0px 0px;
  }
`

export const TrendingPublishedDate = styled.p`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 10px;
  font-family: 'Roboto';
`
