const handleDocClick = (e, dataContext) => {
  const isBlur = e.clientX !== dataContext.data.bcx && e.clientY !== dataContext.data.bcy;
  if (isBlur) {
    dataContext.updateData({ ...dataContext.data, isLinkActive: false });
  }
};

export default handleDocClick;