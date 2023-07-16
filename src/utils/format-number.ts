/**
 * Converts a number to a human-readable format with magnitude units.
 * Examples: 1400 => '1.4k', 1000000 => '1M', 2500000000 => '2.5B'
 * @param number - The number to format.
 * @param decimals - The number of decimal places to include. Default is 1.
 * @param units - An array of magnitude units. Default is ['', 'k', 'M', 'B', 'T'].
 * @returns The formatted number as a string.
 */
export const formatNumber = (
  num?: number,
  decimals: number = 0,
  units: string[] = ['', 'k', 'M', 'B', 'T']
): string => {
  if (!num || Number.isNaN(num)) {
    return '0'; // return "•";
  }

  if (!Number.isFinite(num)) {
    throw new Error(
      'Invalid input. The number must be a finite numeric value.'
    );
  }

  if (decimals < 0 || !Number.isInteger(decimals)) {
    throw new Error(
      'Invalid input. The decimals parameter must be a non-negative integer.'
    );
  }

  if (!Array.isArray(units) || units.length === 0) {
    throw new Error(
      'Invalid input. The units parameter must be a non-empty array of strings.'
    );
  }

  const magnitude = Math.floor(Math.log10(num) / 3);

  if (magnitude >= units.length) {
    // Number exceeds the available magnitude units, use the largest unit
    const largestUnit = units[units.length - 1];
    const scaledNumber = num / Math.pow(1000, magnitude);
    const formattedNumber = scaledNumber.toFixed(decimals);

    return `${formattedNumber}${largestUnit}`;
  }

  const scaledNumber = num / Math.pow(1000, magnitude);
  const formattedNumber = scaledNumber.toFixed(decimals);

  return `${formattedNumber}${units[magnitude]}`;
};
