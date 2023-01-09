declare module 'react-native-config' {
  interface Env {
    ENV: string;
    API_URL: string;
  }

  const Config: Env;

  export default Config;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
