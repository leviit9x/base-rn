export const pick = <T extends Dict>(obj: T, keys: string[]): Dict => {
  return Object.keys(obj)
    .filter(originKey => keys.includes(originKey))
    .reduce((result: { [key: string]: any }, key: string) => {
      result[key] = obj[key as keyof T];
      return result;
    }, {} as Dict);
};
