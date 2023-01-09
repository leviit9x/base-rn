declare module 'react-native-config' {
  interface Env {
    ENV: string;
    API_URL: string;
  }

  const Config: Env;

  export default Config;
}
