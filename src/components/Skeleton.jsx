import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={305}
    height={480}
    viewBox="0 0 383 449"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="139" y="30" rx="2" ry="2" width="106" height="245" /> 
    <rect x="40" y="305" rx="0" ry="0" width="303" height="45" /> 
    <rect x="57" y="355" rx="0" ry="0" width="1" height="0" /> 
    <rect x="40" y="402" rx="0" ry="0" width="109" height="44" /> 
    <rect x="40" y="365" rx="0" ry="0" width="100" height="24" /> 
    <rect x="230" y="402" rx="0" ry="0" width="112" height="44" />
  </ContentLoader>
)
// https://skeletonreact.com/
export default Skeleton