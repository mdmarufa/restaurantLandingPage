const handleScroll = (e, dataContext) => {
  dataContext.updateData({
    ...dataContext.data,
    offsetHeight: e.nativeEvent.srcElement.offsetHeight,
    scrollHeight: e.nativeEvent.srcElement.scrollHeight,
    currentScroll: e.nativeEvent.srcElement.scrollTop,
  });
};

export default handleScroll;
