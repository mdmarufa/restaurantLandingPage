import { FaAngleDown } from "react-icons/fa6";

import "./textLink.scss";
import { useEffect, useRef, useState } from "react";

const TextLink = ({ title, arrowMode, childLinks }) => {
  const ulRef = useRef();
  const [height, setHeight] = useState(0);
  const subLinks = [];

  childLinks?.forEach((link, index) => {
    subLinks.push(<li key={index}>{link}</li>);
  });

  const textLink = childLinks ? (
    <div className="textLink">
      {title}{" "}
      {arrowMode && (
        <span className="sine">
          <FaAngleDown />
        </span>
      )}
      {subLinks.length ? (
        <div
          className="childLinks shadowx"
          style={{ "--height": `${height}px` }}
        >
          <ul ref={ulRef}>{subLinks}</ul>
        </div>
      ) : null}
    </div>
  ) : (
    <span className="textLink">
      {title}{" "}
      {arrowMode && (
        <span className="sine">
          <FaAngleDown />
        </span>
      )}
    </span>
  );

  useEffect(() => {
    const h = ulRef.current?.offsetHeight;
    setHeight(h);
  }, []);

  return textLink;
};

export default TextLink;
