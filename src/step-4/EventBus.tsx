import { ReactNode } from "react";

const React = window.React;
const { createContext, useContext, useEffect, useRef } = React;

export function EventBus(props: { children: ReactNode }) {
  const listenersByType = useRef<
    {
      [key in keyof EventPayloadsByType]: ((
        payload: EventPayloadsByType[key]
      ) => void)[];
    }
  >({
    "new-post": [],
    "provide-current-user": [],
    "request-current-user": [],
  });

  const context = useRef<EventContext>({
    on: (type, callback) => {
      listenersByType.current[type].push(callback as any);
      return function off() {
        listenersByType.current[type] = (listenersByType.current[
          type
        ] as any).filter((cb: any) => cb !== callback);
      };
    },
    dispatch: (event) => {
      listenersByType.current[event.type].forEach((listener: any) =>
        listener(event)
      );
    },
  });

  return (
    <EventContext.Provider value={context.current}>
      {props.children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  return useContext(
    (window as any).EventContext as typeof EventContext
  )!;
}

export function useOn<T extends keyof EventPayloadsByType>(
  type: T,
  callback: (payload: EventPayloadsByType[T]) => void
) {
  const context = useEventContext();

  useEffect(() => {
    return context.on(type, callback);
  }, [context, callback, type]);
}

export function useDispatch() {
  return useEventContext().dispatch;
}

export type EventPayloadsByType = {
  "new-post": {
    type: "new-post";
    content: string;
  };
  "request-current-user": {
    type: "request-current-user";
  };
  "provide-current-user": {
    type: "provide-current-user";
    user: string;
  };
};

type EventContext = {
  on: <T extends keyof EventPayloadsByType>(
    type: T,
    callback: (payload: EventPayloadsByType[T]) => void
  ) => () => void;
  dispatch: <
    T extends EventPayloadsByType[keyof EventPayloadsByType]
  >(
    event: T
  ) => void;
};

export const EventContext = createContext<EventContext | null>(null);

const assignableWindow = window as any;
if (!assignableWindow.EventContext) {
  assignableWindow.EventContext = EventContext;
}
