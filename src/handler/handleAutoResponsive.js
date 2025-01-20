const handleAutoResponsive = (
  appRef,
  appMaxWidth,
  setStyles,
  headerRef,
  setMainWindHeight
) => {
  try {
    const appDefaultHeight = appRef.current?.offsetHeight; //px
    const screenWidth = window.innerWidth;
    const scale = screenWidth / appMaxWidth;

    const left = (appMaxWidth * scale - appMaxWidth) / 2;
    const top = (appDefaultHeight * scale - appDefaultHeight) / 2;
    setStyles({
      transform: `scale(${scale})`,
      position: "fixed",
      left: `${left}px`,
      top: `${top}px`,
    });

    const mainWindHeight =
      (innerHeight - headerRef.current.offsetHeight * scale) / scale;
    setMainWindHeight({
      height: `${mainWindHeight}px`,
    });
    console.log("%c Auto responsive 😀.", "color: lime");
  } catch (e) {
    console.log("%c Auto ponsive failed!. Please re-fresh the browser 🥴.", "color: red");
  }
};

export default handleAutoResponsive;
