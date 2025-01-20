import "./p.scss";

const P = ({title, color, mb, bold, hover}) => {
  return (
    <p className={`p ${color ? "red" : ""} ${bold ? "fw-bold" : ""} ${hover ? "hu" : ""}`} style={{marginBottom: `${mb ? mb+"px" : "16px"}`}}>{title}</p>
  )
}

export default P;