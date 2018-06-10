import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { fetchVideos } from '../reducers/videosReducer'
import VideoItem from '../components/VideoItem'
import Loader from '../components/Loader'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
  .row.equal {
    padding: 15px;
  }
`

const VideoList = ({videos}) => {
  return (
    <Wrapper className='container'>
      <h1 className="text-center">Video list</h1>
      <Loader isLoading={videos.isLoading}/>
      <div className="row equal">
        {videos.isSuccess && videos.data.map((v, i) => <VideoItem key={i} data={v}/>)}
      </div>
    </Wrapper>
  )
}

const mapStateToProps = ({videos}) => ({videos})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.fetchVideos()
    }
  })
)

export default enhance(VideoList)
