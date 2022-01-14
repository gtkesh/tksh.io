import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import Toggle from "react-toggle";

export default function ThemeToggle({}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggle = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <label>
      <style jsx global>{`
        .react-toggle {
          touch-action: pan-x;
          display: inline-block;
          position: relative;
          cursor: pointer;
          background-color: transparent;
          border: 0;
          padding: 0;

          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
        }

        .react-toggle-screenreader-only {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        .react-toggle--disabled {
          cursor: not-allowed;
          opacity: 0.5;
          -webkit-transition: opacity 0.25s;
          transition: opacity 0.25s;
        }

        .react-toggle-track {
          width: 50px;
          height: 24px;
          padding: 0;
          border-radius: 30px;
          background-color: #000;
          -webkit-transition: all 0.2s ease;
          -moz-transition: all 0.2s ease;
          transition: all 0.2s ease;
        }

        .react-toggle--checked .react-toggle-track {
          background-color: #fbeec1;
        }

        .react-toggle-track-check {
          position: absolute;
          width: 14px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          left: 8px;
          opacity: 0;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle--checked .react-toggle-track-check {
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle-track-x {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0px;
          bottom: 0px;
          margin-top: auto;
          margin-bottom: auto;
          line-height: 0;
          right: 10px;
          opacity: 1;
          -webkit-transition: opacity 0.25s ease;
          -moz-transition: opacity 0.25s ease;
          transition: opacity 0.25s ease;
        }

        .react-toggle--checked .react-toggle-track-x {
          opacity: 0;
        }

        .react-toggle-thumb {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
          position: absolute;
          top: 1px;
          left: 1px;
          width: 22px;
          height: 22px;
          border: 1px solid #fbeec1;

          border-radius: 50%;
          background-color: #fafafa;

          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          -webkit-transition: all 0.25s ease;
          -moz-transition: all 0.25s ease;
          transition: all 0.25s ease;
        }

        .react-toggle--checked .react-toggle-thumb {
          left: 27px;
          border: 1px solid #4d4d4d;
        }

        .react-toggle--focus .react-toggle-thumb {
          -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
          -moz-box-shadow: 0px 0px 3px 2px #0099e0;
          box-shadow: 0px 0px 2px 3px #0099e0;
        }

        .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
          -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
          -moz-box-shadow: 0px 0px 5px 5px #0099e0;
          box-shadow: 0px 0px 5px 5px #0099e0;
        }
      `}</style>
      <Toggle
        defaultChecked={false}
        onChange={toggle}
        // className={styles.themeToggle}
        icons={{
          checked: <HalfMoonSvg />,
          unchecked: <SunSvg />,
        }} // TODO: add custom icons
      />
    </label>
  );
}

function SunSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.97 118.75"
      x="0px"
      y="0px"
      fill="#fbeec1"
    >
      <g>
        <circle
          cx="47.98"
          cy="48.37"
          r="25.58"
          transform="translate(-9.83 12.32) rotate(-13.28)"
        />
        <path d="M48,19.81a1.92,1.92,0,0,0,1.92-1.92v-12a1.92,1.92,0,0,0-3.84,0v12A1.92,1.92,0,0,0,48,19.81Z" />
        <path d="M62.27,23.64a1.85,1.85,0,0,0,1,.26,1.9,1.9,0,0,0,1.66-1l6-10.35a1.92,1.92,0,0,0-3.33-1.92L61.57,21A1.91,1.91,0,0,0,62.27,23.64Z" />
        <path d="M72.73,34.11a1.91,1.91,0,0,0,1.66,1,1.94,1.94,0,0,0,1-.25l10.36-6a1.92,1.92,0,0,0-1.92-3.33l-10.36,6A1.92,1.92,0,0,0,72.73,34.11Z" />
        <path d="M78.47,46.49h0a1.92,1.92,0,0,0,0,3.84l12,0h0a1.92,1.92,0,0,0,0-3.84Z" />
        <path d="M85.66,68,75.31,62a1.92,1.92,0,0,0-1.92,3.32l10.34,6a2,2,0,0,0,1,.26,1.92,1.92,0,0,0,1-3.58Z" />
        <path d="M64.83,73.85a1.92,1.92,0,0,0-3.33,1.91l6,10.37a1.92,1.92,0,1,0,3.33-1.91Z" />
        <path d="M47.9,76.94h0A1.92,1.92,0,0,0,46,78.85l0,12a1.91,1.91,0,0,0,1.91,1.92h0a1.91,1.91,0,0,0,1.91-1.91l0-12A1.92,1.92,0,0,0,47.9,76.94Z" />
        <path d="M33.62,73.07a1.93,1.93,0,0,0-2.63.69L25,84.1a1.9,1.9,0,0,0,.69,2.62,1.88,1.88,0,0,0,1,.26,1.91,1.91,0,0,0,1.66-1l6-10.34A1.91,1.91,0,0,0,33.62,73.07Z" />
        <path d="M23.19,62.57a1.92,1.92,0,0,0-2.62-.71L10.19,67.8a1.92,1.92,0,0,0,1.91,3.33l10.38-5.94A1.93,1.93,0,0,0,23.19,62.57Z" />
        <path d="M5.55,46.29A1.89,1.89,0,0,0,3.62,48.2a1.92,1.92,0,0,0,1.91,1.93l12,0h0a1.92,1.92,0,0,0,0-3.84Z" />
        <path d="M10.35,28.65l10.33,6a1.86,1.86,0,0,0,1,.27,1.93,1.93,0,0,0,1.66-1,1.9,1.9,0,0,0-.69-2.62l-10.33-6a1.92,1.92,0,0,0-1.93,3.32Z" />
        <path d="M31.2,22.85A1.92,1.92,0,1,0,34.53,21L28.6,10.56a1.92,1.92,0,0,0-3.33,1.91Z" />
        <path d="M55.22,16.62a1.89,1.89,0,0,0,.47.06,1.92,1.92,0,0,0,1.86-1.45L60.77,2.39a1.92,1.92,0,0,0-3.72-.94L53.83,14.3A1.9,1.9,0,0,0,55.22,16.62Z" />
        <path d="M69.64,24.65a1.9,1.9,0,0,0,1.33.54,1.93,1.93,0,0,0,1.38-.59l9.22-9.5a1.92,1.92,0,1,0-2.76-2.67l-9.22,9.5A1.93,1.93,0,0,0,69.64,24.65Z" />
        <path d="M78.1,38.81A1.92,1.92,0,0,0,80,40.2a2,2,0,0,0,.53-.07l12.73-3.62a1.92,1.92,0,0,0-1-3.69L79.43,36.44A1.92,1.92,0,0,0,78.1,38.81Z" />
        <path d="M93.52,57.15,80.68,53.91a1.92,1.92,0,0,0-.94,3.73l12.84,3.24a2.59,2.59,0,0,0,.47,0,1.92,1.92,0,0,0,.47-3.78Z" />
        <path d="M73,69.67a1.92,1.92,0,0,0-2.67,2.76l9.49,9.23a1.92,1.92,0,0,0,2.68-2.76Z" />
        <path d="M58.51,79.49a1.92,1.92,0,0,0-3.7,1l3.6,12.74a1.92,1.92,0,0,0,1.85,1.4,1.86,1.86,0,0,0,.52-.07,1.92,1.92,0,0,0,1.33-2.37Z" />
        <path d="M39.64,78.39a1.91,1.91,0,0,0-2.33,1.38L34.05,92.61a1.91,1.91,0,0,0,1.39,2.33,2,2,0,0,0,.47.06,1.92,1.92,0,0,0,1.86-1.45L41,80.72A1.91,1.91,0,0,0,39.64,78.39Z" />
        <path d="M25.24,70.32a1.91,1.91,0,0,0-2.71,0l-9.24,9.48A1.92,1.92,0,1,0,16,82.52L25.28,73A1.93,1.93,0,0,0,25.24,70.32Z" />
        <path d="M16.81,56.14a1.91,1.91,0,0,0-2.37-1.33L1.7,58.4a1.92,1.92,0,0,0,.52,3.77,1.93,1.93,0,0,0,.52-.08l12.74-3.58A1.92,1.92,0,0,0,16.81,56.14Z" />
        <path d="M1.45,37.75,14.28,41a1.89,1.89,0,0,0,.47.06,1.92,1.92,0,0,0,.47-3.78L2.39,34a1.91,1.91,0,1,0-.94,3.71Z" />
        <path d="M22,25.29a1.92,1.92,0,0,0,2.68-2.75l-9.47-9.25A1.92,1.92,0,1,0,12.5,16Z" />
        <path d="M36.52,15.51a1.93,1.93,0,0,0,1.85,1.41,2.24,2.24,0,0,0,.51-.07,1.92,1.92,0,0,0,1.33-2.37L36.64,1.73a1.92,1.92,0,1,0-3.69,1Z" />
      </g>
    </svg>
  );
}

function HalfMoonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="48.2 19.4 515 611"
      enableBackground="8.2 11.4 415.5 489.2;"
      xmlSpace="preserve"
    >
      <g>
        <path d="M426.8,463.6c-105.3,7-202-61.9-230-163.8C168.9,197.9,216.9,89.2,311,41.5c2.5-1.3,3.8-4.2,3.1-6.9   c-0.8-2.7-3.3-4.6-6.2-4.4c-15.9,1.1-31.7,3.7-46.9,7.9C200.3,54.8,149.8,94,118.7,148.6c-31.1,54.6-39.1,118.1-22.5,178.8   c16.6,60.6,55.9,111.1,110.5,142.3c36,20.5,75.8,30.9,116.1,30.9c20.9,0,41.9-2.8,62.6-8.5c15.4-4.2,30.3-10,44.4-17.1   c2.5-1.3,3.8-4.2,3.1-6.9C432.2,465.3,429.6,463.4,426.8,463.6z M382.3,480.6c-19.7,5.4-39.5,8-59,8   c-98.1,0-188.3-65.2-215.5-164.3c-15.8-57.5-8.2-117.8,21.3-169.6c29.5-51.9,77.5-89.1,135-104.9c0,0,0,0,0,0   c5.2-1.4,10.5-2.7,15.8-3.7c-35.8,24.3-64.5,58.5-82.5,98.4c-22.3,49.7-26.7,106-12.2,158.6c14.4,52.6,46.9,98.9,91.5,130.2   c35.8,25.2,77.9,39.8,121.1,42.5C392.7,477.5,387.5,479.1,382.3,480.6z" />
        <path d="M289.7,167.1c-2.6,0-4.9,1.7-5.7,4.1c-0.8,2.5,0.1,5.2,2.2,6.7l23.9,17.3l-9.2,28.1c-0.8,2.5,0.1,5.2,2.2,6.7s5,1.5,7.1,0   l23.9-17.5l23.9,17.5c1.1,0.8,2.3,1.2,3.5,1.2c1.2,0,2.5-0.4,3.5-1.1c2.1-1.5,3-4.2,2.2-6.7l-9.2-28.1l24-17.3   c2.1-1.5,3-4.2,2.2-6.7c-0.8-2.5-3.1-4.1-5.7-4.1c0,0,0,0,0,0l-29.8,0l-9.9-25.6c-0.9-2.4-3.2-3.9-5.8-3.8   c-2.5,0.1-4.8,1.7-5.5,4.2l-8.2,25.3L289.7,167.1C289.7,167.1,289.7,167.1,289.7,167.1z M323.6,179.2   C323.6,179.2,323.6,179.2,323.6,179.2c2.6,0,4.9-1.7,5.7-4.2l4.3-13.3l5.3,13.7c0.9,2.3,3.1,3.8,5.6,3.8c0,0,0,0,0,0l15.4,0   l-12.5,9c-2.1,1.5-3,4.2-2.2,6.7l4.8,14.6l-12.4-9.1c-2.1-1.5-5-1.5-7.1,0l-12.4,9.1l4.8-14.6c0.8-2.5-0.1-5.2-2.2-6.7l-12.5-9   L323.6,179.2z" />
        <path d="M463.5,372.3c-0.8-2.5-3.1-4.1-5.7-4.1c0,0,0,0,0,0l-29.8,0.1l-9.9-25.6c-0.9-2.4-3.2-3.9-5.8-3.8   c-2.5,0.1-4.8,1.7-5.5,4.2l-8.2,25.3l-29.6-0.1c0,0,0,0,0,0c-2.6,0-4.9,1.7-5.7,4.1c-0.8,2.5,0.1,5.2,2.2,6.7l24,17.3l-9.2,28.1   c-0.8,2.5,0.1,5.2,2.2,6.7c2.1,1.5,5,1.5,7.1,0l23.9-17.5l23.9,17.5c1.1,0.8,2.3,1.2,3.5,1.2c1.2,0,2.5-0.4,3.5-1.1   c2.1-1.5,3-4.2,2.2-6.7l-9.2-28.1l24-17.3C463.4,377.5,464.3,374.8,463.5,372.3z M426.8,389.2c-2.1,1.5-3,4.2-2.2,6.7l4.8,14.6   l-12.4-9.1c-2.1-1.5-5-1.5-7.1,0l-12.4,9.1l4.8-14.6c0.8-2.5-0.1-5.2-2.2-6.7l-12.5-9l15.4,0c0,0,0,0,0,0c2.6,0,4.9-1.7,5.7-4.2   l4.3-13.3l5.2,13.6c0.9,2.3,3.1,3.8,5.6,3.8c0,0,0,0,0,0l15.4,0L426.8,389.2z" />
        <path d="M122.5,103.9c2.1,1.5,5,1.5,7.1,0c2.1-1.5,3-4.2,2.2-6.7L122.6,69l23.9-17.4c2.1-1.5,3-4.2,2.2-6.7   c-0.8-2.5-3.1-4.1-5.7-4.1c0,0,0,0,0,0l-29.8,0.1l-9.9-25.6c-0.9-2.4-3.2-3.9-5.8-3.8c-2.5,0.1-4.8,1.7-5.5,4.2l-8.2,25.3   l-29.6-0.1c0,0,0,0,0,0c-2.6,0-4.9,1.7-5.7,4.1c-0.8,2.5,0.1,5.2,2.2,6.7L74.7,69l-9.2,28.1c-0.8,2.5,0.1,5.2,2.2,6.7   c1.1,0.8,2.3,1.1,3.5,1.1c1.2,0,2.5-0.4,3.5-1.1l23.9-17.4L122.5,103.9z M82.6,83.2l4.8-14.6c0.8-2.5-0.1-5.2-2.2-6.7l-12.4-9   l15.4,0c0,0,0,0,0,0c2.6,0,4.9-1.7,5.7-4.2l4.3-13.3l5.3,13.7c0.9,2.3,3.1,3.8,5.6,3.8c0,0,0,0,0,0l15.4,0l-12.4,9   c-2.1,1.5-3,4.2-2.2,6.7l4.8,14.6l-12.4-9.1c-2.1-1.5-5-1.5-7.1,0L82.6,83.2z" />
        <path d="M139,239c2.9-33.1,14.2-55.9,14.4-56.3c1.5-3,0.3-6.6-2.6-8.1c-3-1.5-6.6-0.3-8.1,2.6c-0.5,1-12.5,24.8-15.6,60.3   c-2.9,32.8,1.5,82,39.1,130.8c1.2,1.5,3,2.3,4.8,2.3c1.3,0,2.6-0.4,3.7-1.2c2.6-2,3.1-5.8,1.1-8.4C147.5,324.4,135.2,283.3,139,239   z" />
      </g>
    </svg>
  );
}
