/**
 * Get random number from min to max
 */
export function rand (...args: number[]): number {
  let min = 0;
  let max = 0;
  if (args.length > 1) {
    min = args[0];
    max = args[1];
  } else if (args.length === 1) {
    max = args[0];
  } else {
    max = rand(0, 999999999999999);
  };
  return min + Math.floor(Math.random() * (max + 1 - min));
}
