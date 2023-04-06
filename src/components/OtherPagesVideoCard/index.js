import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  TrendingVideoCardItem,
  TrendingVideoThumbnail,
  TrendingVideoCardDetailsCard,
  TrendingChannelLogoCard,
  TrendingChannelContentCard,
  TrendingVideoTitle,
  TrendingChannelNameOne,
  TrendingChannelNameTwo,
  TrendingVideoExtraDetailsCard,
  TrendingViewCount,
  TrendingPublishedDate,
} from './styledComponents'

import './index.css'

const OtherPagesVideoCard = props => {
  const {data} = props
  const date = new Date(data.publishedAt)
  const newDate = formatDistanceToNow(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  )
  const array = newDate.split('')
  const year = array.filter(eachitem => parseInt(eachitem))
  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkModeEnabled} = value
        return (
          <li className="trending-page-list-item">
            <Link
              to={`/videos/${data.id}`}
              style={{textDecoration: 'none'}}
              className="trending-video-link-item"
            >
              <TrendingVideoCardItem>
                <TrendingVideoThumbnail
                  src={data.thumbnailUrl}
                  alt="video thumbnail"
                />
                <TrendingVideoCardDetailsCard>
                  <TrendingChannelLogoCard
                    src={data.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <TrendingChannelContentCard>
                    <TrendingVideoTitle isDarkModeEnabled={isDarkModeEnabled}>
                      {data.title}
                    </TrendingVideoTitle>
                    <TrendingChannelNameOne
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      {data.channel.name}
                    </TrendingChannelNameOne>
                    <TrendingVideoExtraDetailsCard
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      <TrendingChannelNameTwo
                        isDarkModeEnabled={isDarkModeEnabled}
                      >
                        {data.channel.name}
                      </TrendingChannelNameTwo>
                      <GoPrimitiveDot className="trending-route-dot" />
                      <TrendingViewCount>
                        {data.viewCount} views
                      </TrendingViewCount>
                      <GoPrimitiveDot />
                      <TrendingPublishedDate>
                        {year[0]} years ago
                      </TrendingPublishedDate>
                    </TrendingVideoExtraDetailsCard>
                  </TrendingChannelContentCard>
                </TrendingVideoCardDetailsCard>
              </TrendingVideoCardItem>
            </Link>
          </li>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default OtherPagesVideoCard
