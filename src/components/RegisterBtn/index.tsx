import React, { ButtonHTMLAttributes } from "react";

import { Btn } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const RegisterBtn = (props: ButtonProps) => {
  return <Btn className="button" {...props} />;
};

export default RegisterBtn;
