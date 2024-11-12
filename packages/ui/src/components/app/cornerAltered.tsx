import { SVGProps } from "react"

const CornerAltered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 542 297"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M155.855 0H0v6.551h155.855V0Z" />
      <path
        fill="url(#c)"
        fillRule="evenodd"
        d="M472.329 33.85 435.176 0h-279.32v6.551h276.605l37.154 33.85h33.046v33.021l32.783 37.125V297H542V107.835L509.218 70.71v-9.563H542V0h-61.194v33.85h-8.477Zm36.889 0v20.746h26.226V6.55h-48.081V33.85h21.855Zm-81.956-19.655h.433l.315.297 35.745 33.552h31.257v30.172l31.427 36.819.263.306V297h-2.186V116.144l-31.427-36.819-.262-.306V50.228H462.89l-.315-.297-35.746-33.552h-59.668v-2.184h60.101Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={155.81}
        x2={-0.072}
        y1={4.392}
        y2={4.372}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#89F3FF" />
        <stop offset={1} stopColor="#3766CC" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={348.928}
        x2={348.928}
        y1={0}
        y2={297}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#89F3FF" />
        <stop offset={0.5} stopColor="#3F50AD" />
        <stop offset={1} stopColor="#3F50AD" stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M542 0H0v297h542z" />
      </clipPath>
    </defs>
  </svg>
)
export default CornerAltered
