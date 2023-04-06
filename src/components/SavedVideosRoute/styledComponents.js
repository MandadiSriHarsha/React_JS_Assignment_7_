import styled from 'styled-components'

export const SavedVideosRouteBgContainer = styled.div`
  height: 90vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SavedRoute = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const SavedVideosHeaderCard = styled.div`
  width: 100%;
  padding: 20px 0px 20px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#313131' : '#e2e8f0'};
`

export const SavedVideosLogoCard = styled.div`
  color: #ff0000;
  font-size: 20px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  border-radius: 100%;
  padding: 9px 13px 7px 13px;
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#f8fafc' : '#212121')};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideosListBgContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0px 0px 0px 0px;
  padding: 30px 13px 40px 13px;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
`

export const SavedVideosNoVideosBgContainer = styled.div`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const NoSavedVideosImage = styled.img`
  width: 90%;
  max-width: 400px;
  margin: 40px 10px 30px 10px;
`

export const NoSavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#f8fafc' : '#231f20')};
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 15px 30px 15px;
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768xp) {
    font-size: 25px;
  }
`

export const NoSavedVideosDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#606060')};
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 15px 30px 15px;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 768xp) {
    font-size: 18px;
  }
`

export const NoSavedVideosButton = styled.button`
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
