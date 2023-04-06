import styled from 'styled-components'

export const GameRouteBgContainer = styled.div`
  width: 100%;
`

export const GameRouteMainCard = styled.div`
  width: 100%;
  height: 90vh;
  max-height: 100vh;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const GameRouteDisplayCard = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const GameRouteHeaderCard = styled.div`
  width: 100%;
  padding: 20px 0px 20px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#313131' : '#e2e8f0'};
`

export const GameRouteLogoCard = styled.div`
  color: #ff0000;
  font-size: 23px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  border-radius: 100%;
  padding: 9px 13px 7px 13px;
  margin: 0px 15px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const GameRouteHeading = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#f8fafc' : '#212121')};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 23px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const GamePageErrorCard = styled.div`
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
    props.isDarkModeEnabled ? '#231f20' : '#f8fafc'};
`

export const GamePageErrorCardImage = styled.img`
  width: 90%;
  max-width: 350px;
  align-self: center;
  margin: 0px 10px 0px 0px;
`

export const GamePageErrorCardHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#231f20')};
  font-size: 20px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 20px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const GamePageErrorCardDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#cbd5e1' : '#616e7c')};
  font-size: 16px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const GamePageErrorCardButton = styled.button`
  padding: 10px 16px 10px 16px;
  margin: 0px 0px 0px 0px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
`

export const GamePageListCardBgContainer = styled.ul`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 0px 0px 30px 0px;
  list-style-type: none;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f8fafc'};
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const GamePageListCard = styled.li`
  width: 100%;
  list-style-type: none;
  padding: 10px 10px 10px 10px;
`

export const GamePageListCardLogo = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 0px 0px 0px 0px;
`

export const GamePageListCardHeading = styled.h1`
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 8px 0px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#ebebeb' : '#231f20')};
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const GamePageListCardDescription = styled.p`
  font-size: 14px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isDarkModeEnabled ? '#cccccc' : '#616e7c')};
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
