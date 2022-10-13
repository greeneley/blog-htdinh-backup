import { css } from '@maximeheckel/design-system';
import { LogoProps } from './types';

const transitionLogo = css({
  transition: '0.5s',
  willChange: 'stroke, fill',
});

const Logo = ({ alt, size }: LogoProps) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={size || 120}
    viewBox="0 0 726.000000 452.000000"
    preserveAspectRatio="xMidYMid meet"
    aria-label={alt}
    className={transitionLogo()}
    fill="none"
    stroke="var(--maximeheckel-colors-typeface-primary)"
  >
    <g
      transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M1277 3223 c-4 -3 -7 -244 -7 -535 l0 -528 290 0 c337 0 399 8 528
71 181 88 281 254 282 464 0 237 -139 421 -375 499 -27 8 -93 20 -145 26 -106
11 -563 14 -573 3z m602 -257 c135 -46 204 -174 180 -331 -12 -77 -52 -141
-112 -182 -61 -41 -122 -53 -262 -53 l-115 0 0 288 c0 159 3 292 8 297 11 12
255 -3 301 -19z"
      />
      <path
        d="M2667 3223 c-4 -3 -7 -244 -7 -535 l0 -528 150 0 150 0 0 535 0 535
-143 0 c-79 0 -147 -3 -150 -7z"
      />
      <path
        d="M3310 2695 l0 -535 145 0 145 0 0 280 c0 154 3 280 8 279 4 0 110
-126 237 -280 l229 -279 123 0 123 0 0 535 0 535 -145 0 -145 0 -2 -285 -3
-284 -235 284 -235 285 -122 0 -123 0 0 -535z"
      />
      <path
        d="M4670 2695 l0 -535 150 0 150 0 0 210 0 210 205 0 205 0 0 -210 0
-210 150 0 150 0 0 535 0 536 -147 -3 -148 -3 -3 -197 -2 -198 -205 0 -205 0
0 200 0 200 -150 0 -150 0 0 -535z"
      />
      <path
        d="M1160 1655 l0 -135 1685 0 1685 0 0 135 0 135 -1685 0 -1685 0 0
-135z"
      />
    </g>
  </svg>
);

export default Logo;
