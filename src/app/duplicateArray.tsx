export default function DuplicateItems<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i], arr[i]);
  }
  return result;
}