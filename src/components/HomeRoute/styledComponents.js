import styled from 'styled-components'

export const HomeRouteBgContainer = styled.div`
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

export const HomeRouteDisplayCard = styled.div`
  height: 100%;
  padding: ${props =>
    props.isPremiumCardActive ? '0px 0px 30px 0px' : '10px 10px 30px 10px'};
  width: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const HomePageVideosCard = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
`

export const HomePageMainDisplayCard = styled.div`
  width: 100%;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
`

export const HomePageErrorCard = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 30px 30px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
`

export const HomePageErrorCardImage = styled.img`
  width: 90%;
  max-width: 380px;
  margin: 0px 10px 0px 0px;
`

export const HomePageErrorCardHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#231f20')};
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 25px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const HomePageErrorCardDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#616e7c')};
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto';
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const HomePageErrorCardButton = styled.button`
  padding: 9px 16px 9px 16px;
  margin: 0px 0px 0px 0px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Roboto';
  outline: none;
  font-size: 16px;
  border-radius: 8px;
`
