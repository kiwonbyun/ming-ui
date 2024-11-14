import { SVGProps } from "react";

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.49063 3.50423C3.59145 3.40368 3.72812 3.34721 3.87062 3.34721C4.01311 3.34721 4.14978 3.40368 4.2506 3.50423L7.9931 7.24117L11.7356 3.50423C11.7848 3.45148 11.8442 3.40917 11.9101 3.37982C11.9761 3.35048 12.0473 3.3347 12.1195 3.33343C12.1917 3.33216 12.2634 3.34542 12.3304 3.37242C12.3973 3.39942 12.4582 3.43962 12.5092 3.4906C12.5603 3.54159 12.6005 3.60232 12.6276 3.66917C12.6546 3.73603 12.6679 3.80764 12.6666 3.87973C12.6654 3.95182 12.6495 4.02292 12.6202 4.08878C12.5908 4.15464 12.5484 4.21392 12.4956 4.26307L8.75307 8.00001L12.4956 11.7369C12.5484 11.7861 12.5908 11.8454 12.6202 11.9112C12.6495 11.9771 12.6654 12.0482 12.6666 12.1203C12.6679 12.1924 12.6546 12.264 12.6276 12.3308C12.6005 12.3977 12.5603 12.4584 12.5092 12.5094C12.4582 12.5604 12.3973 12.6006 12.3304 12.6276C12.2634 12.6546 12.1917 12.6679 12.1195 12.6666C12.0473 12.6653 11.9761 12.6495 11.9101 12.6202C11.8442 12.5909 11.7848 12.5485 11.7356 12.4958L7.9931 8.75885L4.2506 12.4958C4.14867 12.5906 4.01385 12.6423 3.87454 12.6398C3.73524 12.6374 3.60233 12.581 3.50381 12.4826C3.40529 12.3843 3.34886 12.2515 3.3464 12.1124C3.34394 11.9733 3.39565 11.8387 3.49063 11.7369L7.23313 8.00001L3.49063 4.26307C3.38993 4.1624 3.33337 4.02594 3.33337 3.88365C3.33337 3.74137 3.38993 3.6049 3.49063 3.50423Z"
        fill="#BDC2CE"
      />
    </svg>
  );
}

export default CloseIcon;