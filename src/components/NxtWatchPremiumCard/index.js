import {TiDelete} from 'react-icons/ti'

import {
  NxtWatchPremiumCardBgContainer,
  NxtWatchPremiumCardHeaderCard,
  NxtWatchPremiumCardLogo,
  NxtWatchPremiumCardDeleteButton,
  NxtWatchPremiumCardHeading,
  NxtWatchPremiumCardPurchaseButton,
} from './styledComponents'

const NxtWatchPremiumCard = props => {
  const {onTogglePremiumCardDisplay, isDarkModeEnabled} = props
  return (
    <NxtWatchPremiumCardBgContainer
      isDarkModeEnabled={isDarkModeEnabled}
      data-testid="premiumCard"
    >
      <NxtWatchPremiumCardHeaderCard>
        <NxtWatchPremiumCardLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <NxtWatchPremiumCardDeleteButton
          type="button"
          onClick={onTogglePremiumCardDisplay}
        >
          <TiDelete />
        </NxtWatchPremiumCardDeleteButton>
      </NxtWatchPremiumCardHeaderCard>
      <NxtWatchPremiumCardHeading>
        Buy Nxt Watch Premium prepaid plans with UPI.
      </NxtWatchPremiumCardHeading>
      <NxtWatchPremiumCardPurchaseButton type="button">
        GET IT NOW
      </NxtWatchPremiumCardPurchaseButton>
    </NxtWatchPremiumCardBgContainer>
  )
}

export default NxtWatchPremiumCard
