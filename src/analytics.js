function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  let isInitial = true;

  const listener = () => {
    counter++;
  };

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return `Analytics was destroyed. Total click = ${counter}`;
      }
      return counter;
    }
  };
}

window.analytics = createAnalytics();
