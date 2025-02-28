export default function debounce(func: (...args: Event[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Event[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};