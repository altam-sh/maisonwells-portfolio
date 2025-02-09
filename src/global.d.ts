import * as jquery from "jquery";

declare global {
  interface JQuery {
    ripples(options?: any): JQuery;
  }
  interface JQueryStatic {
    ripples(options?: any): JQuery;
  }
  interface Window {
    jQuery: typeof jquery;
    $: typeof jquery;
  }
}
declare module 'jquery' {
  interface JQuery {
    ripples(options?: object): JQuery;
  }
}

export {};
