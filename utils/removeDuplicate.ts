export function removeDuplicates(arr: any[], prop: string) {
  return arr.filter(
    (obj, index, self) =>
      index === self.findIndex((el) => el[prop] === obj[prop])
  );
}
