import { css } from '@dinh/design-system';
import { LogoProps } from './types';

const transitionLogo = css({
  transition: '0.5s',
  willChange: 'stroke, fill',
});

const Logo = ({ alt, size, dark = false }: LogoProps) =>
  dark ? (
    // TODO: find image for dark mode
    <></>
  ) : (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 120}
      viewBox="0 0 726.000000 452.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-label={alt}
      className={transitionLogo()}
      fill="none"
      stroke="var(--haidinhthanh-colors-typeface-primary)"
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M608 3124 c-5 -4 -8 -236 -8 -517 l0 -509 313 5 c341 4 363 7 485 68
350 172 348 713 -2 884 -126 61 -160 66 -486 72 -162 3 -298 2 -302 -3z m617
-261 c85 -45 130 -116 141 -221 13 -121 -43 -230 -143 -278 -53 -26 -69 -29
-195 -32 l-138 -4 0 282 0 282 148 -4 c127 -3 152 -6 187 -25z"
        />
        <path d="M1940 2615 l0 -515 145 0 145 0 0 515 0 515 -145 0 -145 0 0 -515z" />
        <path
          d="M2570 2615 l0 -515 140 0 140 0 2 271 3 270 224 -270 224 -271 118 0
119 0 0 515 0 515 -140 0 -140 0 -2 -275 -3 -275 -225 273 -226 272 -117 3
-117 3 0 -516z"
        />
        <path
          d="M3880 2615 l0 -515 140 0 140 0 0 200 0 200 200 0 200 0 0 -200 0
-200 145 0 145 0 0 515 0 516 -142 -3 -143 -3 -3 -192 -2 -193 -200 0 -200 0
0 195 0 195 -140 0 -140 0 0 -515z"
        />
        <path d="M500 1620 l0 -130 1625 0 1625 0 0 130 0 130 -1625 0 -1625 0 0 -130z" />
      </g>
    </svg>
  );

export default Logo;
