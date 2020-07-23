export default function debounce(callbak, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbak(...args);
      timer = null;
    }, delay);
  };
}
