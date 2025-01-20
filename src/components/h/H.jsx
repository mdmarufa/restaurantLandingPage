import "./h.scss";

const H = ({title, children}) => {
  return (
    <h1 className="h">{title}{children}</h1>
  )
};

export default H;