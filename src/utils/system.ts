import RNRestart from 'react-native-restart';
export const restartApp = RNRestart.Restart;

export function genNumberToken(max?: number): number[] {
  const _max = max || 100;
  const out: number[] = [];
  for (let index = 0; index < _max; index++) {
    if (index <= 2) {
      out.push(index);
    } else {
      out.push(out[index - 1]);
    }
  }
  return out;
}
