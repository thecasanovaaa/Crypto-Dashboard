export const convertNumber = (number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Input must be a valid number');
  }
  
  if (number === 0) return '0';
  
  const suffixes = ['K', 'M', 'B', 'T'];
  const absoluteValue = Math.abs(number);
  const index = Math.floor(Math.log10(absoluteValue) / 3);
  const divisor = Math.pow(1000, index);
  
  const formattedNumber = (absoluteValue / divisor).toFixed(2);
  const suffix = index > 0 ? suffixes[index - 1] : '';

  return `${Math.sign(number) < 0 ? '-' : ''}${formattedNumber}${suffix}`;
};
