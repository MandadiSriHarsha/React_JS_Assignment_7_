import styled from 'styled-components'

export const NotFoundDisplayCard = styled.div`
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#ebebeb'};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const NotFoundBgContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 20px 20px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#ebebeb'};
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    flex-shrink: 1;
  }
`

export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 350px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#313131')};
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px 0px 0px 0px;
  padding: 25px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.isDarkModeEnabled ? '#cccccc' : '#909090')};
  font-size: 16px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px 0px 0px 0px;
  padding: 0px 30px 0px 30px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const NotFoundButton = styled.button`
  padding: 10px 16px 10px 16px;
  margin: 20px 0px 0px 0px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Roboto';
  outline: none;
  font-size: 16px;
  border-radius: 8px;
`
