import React from "react";

import { IncrementResponse } from "@app/common";

import Button from "components/Button";
import Label from "components/Label";

import style from "./App.module.css";

export default function App () {
  const [value, setValue] = React.useState (0);

  React.useEffect (function () {
    fetch ("/api/increment", { headers: { "Content-Type": "application/json " } })
      .then (res => res.json ())
      .then (res => {
        const incRes: IncrementResponse = res as IncrementResponse;
        setValue (incRes.total);
      });
  });

  const increment = (val: number) => {
    fetch ("/api/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({ increment: val })
    })
      .then (res => res.json ())
      .then (res => {
        const incRes = res as IncrementResponse;
        setValue (incRes.total);
      });
  };

  return (
    <div className={style.wrapper}>
      <Button label="-5" value={-5} increment={increment} />
      <Button label="-1" value={-1} increment={increment} />
      <Label value={value} />
      <Button label="+1" value={1} increment={increment} />
      <Button label="+5" value={5} increment={increment} />
    </div>
  );
}
