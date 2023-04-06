import styled from 'styled-components'

export const NxtWatchPremiumCardBgContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 25px 25px 25px 25px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: ${props =>
    props.isDarkModeEnabled ? '1px solid #f4f4f4' : '1px solid #212121'};
  border-top: ${props =>
    props.isDarkModeEnabled ? '1px solid #f4f4f4' : '1px solid #212121'};
`

export const NxtWatchPremiumCardHeaderCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 20px 0px;
`

export const NxtWatchPremiumCardLogo = styled.img`
  width: 50%;
  max-width: 117px;
`

export const NxtWatchPremiumCardDeleteButton = styled.button`
  border: none;
  background: transparent;
  font-size: 27px;
  cursor: pointer;
  outline: none;
`

export const NxtWatchPremiumCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.6;
  color: #212121;
  font-weight: 400;
  text-align: left;
  margin: 0px 0px 0px 0px;
  padding: 15px 0px 30px 0px;
`

export const NxtWatchPremiumCardPurchaseButton = styled.button`
  color: #212121;
  font-size: 14px;
  border: 2px solid #212121;
  margin: 0px 0px 0px 0px;
  padding: 9px 13px 9px 13px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  background: transparent;
  border-radius: 5px;
  font-weight: 600;
`
