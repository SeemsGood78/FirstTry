import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={305}
    height={480}
    viewBox="0 0 305 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="262" rx="8" ry="8" width="115" height="80" /> 
    <rect x="12" y="360" rx="8" ry="8" width="115" height="38" /> 
    <rect x="137" y="356" rx="8" ry="8" width="150" height="45" /> 
    <rect x="80" y="30" rx="8" ry="8" width="111" height="211" />
  </ContentLoader>
)
// https://skeletonreact.com/
export default Skeleton