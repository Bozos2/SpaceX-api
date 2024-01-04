import * as React from "react";
import { SVGProps } from "react";
const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={68}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#94a3b8"
        fillRule="evenodd"
        d="M28.53 11.756 0 40a80.765 80.765 0 0 0 19.333 14.135 39.814 39.814 0 0 0 9.238 14.15c15.78 15.62 41.364 15.62 57.143 0a39.813 39.813 0 0 0 9.239-14.15A80.766 80.766 0 0 0 114.286 40L85.778 11.779a12.712 12.712 0 0 0-.064-.063c-15.78-15.621-41.363-15.621-57.143 0l-.04.04Zm54.454 47.475a81.562 81.562 0 0 1-25.841 4.2 81.56 81.56 0 0 1-25.841-4.2 32.382 32.382 0 0 0 2.984 3.396c12.623 12.497 33.09 12.497 45.714 0a32.385 32.385 0 0 0 2.984-3.396ZM34.872 16.807a40.538 40.538 0 0 0 6.808 3.58 40.763 40.763 0 0 0 15.463 3.044c5.306 0 10.56-1.034 15.463-3.044a40.556 40.556 0 0 0 6.808-3.58c-12.466-11.743-32.076-11.743-44.542 0Z"
        clipRule="evenodd"
        transform="scale(0.85)"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h114.286v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoIcon;
