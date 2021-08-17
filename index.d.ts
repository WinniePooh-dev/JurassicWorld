declare module '*.svg' {
  const content: SVGProps<SVGSVGElement>;
  export default content;
}

declare module '*.ttf' {
  const content: TrueType;
  export default content;
}
