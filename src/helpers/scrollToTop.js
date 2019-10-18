function scrollToTop() {
  let scrollAnimation;
  const position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(15, Math.floor(position / 15)));
    scrollAnimation = setTimeout(() => {
      scrollToTop();
    }, 15);
  } else clearTimeout(scrollAnimation);
}

export default scrollToTop;
