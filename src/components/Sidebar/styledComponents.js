import styled from 'styled-components'

export const Sidebar = styled.nav`
  height: 90vh;
  max-height: 100vh;
  width: 25%;
  max-width: 230px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 25px 20px 25px;
  background-color: ${props =>
    props.isDarkModeEnabled ? ' #212121' : '#ffffff'};
  display: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const SidebarMenuCard = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const SidebarHomeItem = styled.li`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
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
`

export const SidebarHomeItemText = styled.p`
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 0px;
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 500
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 500
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

export const SidebarTrendingItem = styled.li`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
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
`

export const SidebarTrendingItemText = styled.p`
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 0px;
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 500
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 500
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

export const SidebarGamingItem = styled.li`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
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
`

export const SidebarGamingItemText = styled.p`
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 0px;
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 500
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 500
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

export const SidebarSavedVideosItem = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
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
`

export const SidebarSavedVideosItemText = styled.p`
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 0px;
  font-weight: ${props => {
    let fontValue = null
    if (props.isDarkModeEnabled === true) {
      if (props.isPathActive) {
        fontValue = 500
      } else {
        fontValue = 400
      }
    } else if (props.isDarkModeEnabled === false) {
      if (props.isPathActive) {
        fontValue = 500
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

export const SidebarContactUsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SidebarContactUsHeading = styled.p`
  font-family: 'Roboto';
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 20px 0px;
  font-size: 16px;
  text-align: left;
  font-weight: 500;
  color: ${props => (props.isDarkModeEnabled ? '#cccccc' : '#606060')};
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const SidebarImagesCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 15px 0px;
  align-items: center;
`

export const SidebarImage = styled.img`
  width: 31px;
  max-width: 34px;
  margin: 0px 0px 0px 0px;
`

export const SidebarContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 0px 0px 0px 0px;
  font-weight: 500;
  text-align: left;
  line-height: 1.6;
  margin: 0px 0px 10px 0px;
  color: ${props => (props.isDarkModeActivated ? '#cccccc' : '#606060')};
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
`
