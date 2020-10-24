import React from "react";

import style from "./Label.module.css";

export type LabelProps = {
  value: number
};

export default function Label (props: LabelProps) {
  return (
    <span className={style.label}>{props.value}</span>
  );
}
