import "./miniCatagoryBox.scss";

const MiniCatagoryBox = ({ img, header, title, width }) => {
  return (
    <div className="catagoryBox shadowx">
      <div className="catagoryImg">
        <img src={img} style={{ width: `${width ? width + "%" : "80%"}` }} />
      </div>
      <div className="ctText">
        <h1 className="catagoryHeader">{header}</h1>
        <p className="catagoryTitle">{title}</p>
      </div>
    </div>
  );
};

export default MiniCatagoryBox;
