import Link from "next/link";

export default function Button({ classes = "", text = "", link = "/" }) {
  return (
    <Link
      prefetch={true}
      className={"btn " + classes}
      aria-label={text}
      href={link}
    >
      {text}
      <ButtonArrow />
    </Link>
  );
}

export function ButtonArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5_26)">
        <path
          d="M7.63146 13.9459L13.4244 8.2846L0.984985 8.40322V6.80382L13.4244 6.92245L7.63146 1.26114L8.62329 0.0871582L15.985 7.51966V7.68738L8.62329 15.0912L7.63146 13.9459Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_26">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.984985 0.0871582)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
