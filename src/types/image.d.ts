declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

type FaviconData = Array<any>;

declare module '*.png?favicon' {
  const content: FaviconData;

  export default content;
}
