import "./serviceBox.scss";

const ServiceBox = ({icon, title, des}) => {
  return (
    <div className="serviceBox shadowx">
      {icon}
      <p>{title}</p>
      <span>{des}</span>
    </div>
  );
};

export default ServiceBox;
