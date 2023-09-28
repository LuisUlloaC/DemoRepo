import * as React from "react"
const LineSVG = ({className, color}) => {
    return(
        <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 52.921 85.224"
  >
    <path
      d="m39.625 160.765 40.38-70.57 3.397-2.642 4.905 1.51v2.264l.378 1.132-40.38 74.721-2.283 2.794-2.863 2.356-4.04.446-2.913-1.33-.442-3.8 1.09-3.553z"
      style={{
        fill: color,
        fillOpacity: 1,
        strokeWidth: 0.264583,
      }}
      transform="translate(-35.764 -87.553)"
    />
  </svg>
    )
}
  
export default LineSVG