import React from "react";

export function IconArrow({ outline, ...props }) {
  if (outline)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M6.414 14L12 19.587L17.586 14H15c-.545 0-1-.455-1-1V4h-4v9a1 1 0 0 1-1 1zm-1.926.902C3.417 13.831 4.175 12 5.69 12H8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h2.31c1.515 0 2.273 1.831 1.202 2.902l-6.451 6.453a1.5 1.5 0 0 1-2.122 0z"
          ></path>
        </g>
      </svg>
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M4.488 14.902C3.417 13.831 4.175 12 5.69 12H8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h2.31c1.515 0 2.273 1.831 1.202 2.902l-6.451 6.453a1.5 1.5 0 0 1-2.122 0z"
        ></path>
      </g>
    </svg>
  );
}
