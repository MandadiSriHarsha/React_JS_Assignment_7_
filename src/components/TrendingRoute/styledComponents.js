import styled from 'styled-components'

export const TrendingPageMainCard = styled.div`
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const TrendingPageDisplayCard = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const TrendingPageHeaderCard = styled.div`
  width: 100%;
  padding: 20px 0px 20px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#313131' : '#e2e8f0'};
`

export const TrendingPageLogoCard = styled.div`
  color: #ff0000;
  font-size: 20px;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  border-radius: 100%;
  padding: 9px 13px 7px 13px;
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const TrendingPageHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#f8fafc' : '#212121')};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const TrendingPageVideosListCard = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
  }
`

export const TrendingPageErrorCard = styled.div`
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

export const TrendingPageErrorCardImage = styled.img`
  width: 90%;
  max-width: 350px;
  align-self: center;
`

export const TrendingPageErrorCardHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#231f20')};
  font-size: 23px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 20px 0px 20px 0px;
`

export const TrendingPageErrorCardDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#616e7c')};
  font-size: 16px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
`

export const TrendingPageErrorCardButton = styled.button`
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
