/**
 * @param {string} number
 * @param {string} pattern This will replace any # with the numbers found in the number parameter
 */
function formatPhone(number, pattern = '(###) ###-####') {
  const numbers = number?.split('').filter(char => /\d/.test(char)) ?? '';

  return pattern
    .split('')
    .map(char => {
      if (!numbers.length) return '';
      if (char === '#') {
        return numbers.shift() ?? '';
      }
      return char;
    })
    .join('');
}

export { formatPhone };
