import React from "react";

import style from "./Button.module.css";

export type ButtonProps = {
  label: string
  value: number
  increment: (inc: number) => void
};

export default function Button (props: ButtonProps) {
  return (
    <button onClick={() => { props.increment(props.value);}} className={style.button}>
      {props.label}
    </button>
  );
}
