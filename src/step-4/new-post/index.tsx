import { useDispatch } from "../EventBus";
import { provideComponent } from "../provideComponent";

const React = window.React;
const { useState } = React;

export function NewPost() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "new-post", content: value });
          setValue("");
        }}
      >
        <label>Neuer Beitrag:</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

provideComponent(NewPost);
