"use client";

import { NumericFormat } from "react-number-format";

type Props = {
  label: string;
  price: number;
};

export function CartRow({ label, price }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="leading-5">{label}</p>
      <NumericFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />
    </div>
  );
}
