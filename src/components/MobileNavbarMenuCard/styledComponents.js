import styled from 'styled-components'

export const MobileNavbarMenuCardList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 0px;
  width: 90%;
  margin: auto;
`
export const NavbarMobileHomeMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-family: 'Roboto';
  border-radius: 8px;
  font-size: 14px;
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const NavbarMobileHomeMenuText = styled.p`
  padding: 0px 0px 0px 12px;
  margin: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    }
    return fontValue
  }};
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ffffff'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#000000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
`

export const NavbarMobileTrendingMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const NavbarMobileTrendingMenuText = styled.p`
  padding: 0px 0px 0px 12px;
  margin: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    }
    return fontValue
  }};
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ffffff'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#000000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
`

export const NavbarMobileGamingMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  font-family: 'Roboto';
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-size: 14px;
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const NavbarMobileGamingMenuText = styled.p`
  padding: 0px 0px 0px 12px;
  margin: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    }
    return fontValue
  }};
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ffffff'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#000000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
`

export const NavbarMobileSavedVideosMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-size: 14px;
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#ff0000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const NavbarMobileSavedVideosMenuText = styled.p`
  padding: 0px 0px 0px 12px;
  margin: 0px 0px 0px 0px;
  font-family: 'Roboto';
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 'bold'
      } else {
        fontValue = 400
      }
    }
    return fontValue
  }};
  color: ${props => {
    let colorValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        colorValue = '#ffffff'
      } else {
        colorValue = '#94a3b8'
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        colorValue = '#000000'
      } else {
        colorValue = '#383838'
      }
    }
    return colorValue
  }};
`
