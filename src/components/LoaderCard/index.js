import Loader from 'react-loader-spinner'

import {LoaderBgContainer} from './styledComponents'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoaderCard = () => (
  <LoaderBgContainer data-testid="loader">
    <Loader type="TailSpin" color="#ff0000" height={50} width={50} />
  </LoaderBgContainer>
)

export default LoaderCard
