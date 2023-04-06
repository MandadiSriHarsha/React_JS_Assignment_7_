import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'

import NxtWatchAppContext from '../../context/NxtWatchAppContext'

import {
  VideoCardItem,
  VideoThumbnail,
  VideoCardDetailsCard,
  ChannelLogoCard,
  ChannelContentCard,
  VideoTitle,
  ChannelName,
  VideoExtraDetailsCard,
  ViewCount,
  PublishedDate,
} from './styledComponents'

import './index.css'

const VideoCard = props => {
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
          <li className="home-card-link-item">
            <Link
              to={`/videos/${data.id}`}
              style={{textDecoration: 'none'}}
              className="video-link-item"
            >
              <VideoCardItem>
                <VideoThumbnail src={data.thumbnailUrl} alt="video thumbnail" />
                <VideoCardDetailsCard>
                  <ChannelLogoCard
                    src={data.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelContentCard>
                    <VideoTitle isDarkModeEnabled={isDarkModeEnabled}>
                      {data.title}
                    </VideoTitle>
                    <ChannelName isDarkModeEnabled={isDarkModeEnabled}>
                      {data.channel.name}
                    </ChannelName>
                    <VideoExtraDetailsCard
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      <ViewCount>{data.viewCount} views</ViewCount>
                      <GoPrimitiveDot />
                      <PublishedDate>{year[0]} years ago</PublishedDate>
                    </VideoExtraDetailsCard>
                  </ChannelContentCard>
                </VideoCardDetailsCard>
              </VideoCardItem>
            </Link>
          </li>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default VideoCard
