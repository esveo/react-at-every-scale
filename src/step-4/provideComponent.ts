import { ComponentType } from "react";

export function provideComponent(component: ComponentType) {
  (document.currentScript as any).resolveComponent(component);
}
