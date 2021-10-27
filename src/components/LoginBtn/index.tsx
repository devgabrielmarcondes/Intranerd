import React, { ButtonHTMLAttributes } from "react";

import { LBtn }from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const LoginBtn = (props: ButtonProps) => {
  return <LBtn className="button" {...props} />;
};

export default LoginBtn;
