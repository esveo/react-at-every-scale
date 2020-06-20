import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { render } from "react-dom";

export function initDatePickers() {
  const datepickerInputs = document.querySelectorAll(
    "[data-react-datepicker]"
  ) as NodeListOf<HTMLInputElement>;

  for (const input of datepickerInputs) {
    const reactRoot = document.createElement("span");
    reactRoot.style.position = "relative";

    input.insertAdjacentElement("afterend", reactRoot);

    render(<DatePickerPlugin target={input} />, reactRoot);
  }
}

function DatePickerPlugin(props: { target: HTMLInputElement }) {
  const [visible, setVisible] = useState(false);
  const input = props.target;

  useEffect(() => {
    function onFocus() {
      setVisible(true);
    }
    input.addEventListener("focus", onFocus);

    return () => input.removeEventListener("focus", onFocus);
  }, []);

  if (!visible) return null;

  return (
    <span style={{ position: "absolute" }}>
      <ReactDatePicker
        inline
        onChange={(d) => {
          input.value = d ? formatDate(d) : "";
          setVisible(false);
        }}
      />
    </span>
  );
}

function formatDate(d: Date) {
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return [year, month, day].join("-");
}
