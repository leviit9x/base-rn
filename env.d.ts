declare module 'react-native-config' {
  interface Env {
    ENV: string;
    API_URL: string;
    IP_SERVER: string;
  }

  const Config: Env;

  export default Config;
}
