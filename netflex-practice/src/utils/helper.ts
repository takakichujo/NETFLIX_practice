type TruncateFunction = {
  truncate: (str: string | undefined, n: number) => string | undefined;
};
export const truncate: TruncateFunction['truncate'] = (str, n) => {
  if (str !== undefined) {
    return str.length > n ? str.substring(0, n - 1) + '...' : str;
  }
  return str;
};
