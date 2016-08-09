// example external ES Module declaration
declare module 'example-module' {
  // public variables
  export const exampleVariable: number;

  // public functions
  export function exampleFunction(param: string): boolean;

  // default export
  export default {
    exampleVariable: exampleVariable,
    exampleFunction: exampleFunction
  };
}
