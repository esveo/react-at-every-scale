import { ComponentType } from "react";

const cache: { [key: string]: Promise<ComponentType> } = {};

export function load(url: string): Promise<ComponentType> {
  let promise = cache[url];
  if (!promise) {
    promise = new Promise((resolve) => {
      const script = document.createElement("script");
      (script as any).resolveComponent = resolve;
      script.src = url;
      document.body.appendChild(script);
    });
  }
  return promise;
}
