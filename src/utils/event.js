// scroll optimize
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#scroll_event_throttling
export const optimizeScroll = (callback) => {
  let ticking = false;
  return () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};
