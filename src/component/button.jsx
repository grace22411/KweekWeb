import React from "react";
import { Button } from "antd";

export const ButtonComponent = ({
  onClick,
  text,
  size,
  style,
  className,
  htmlType = "button",
  type
}) => {
  return (
    <span className={className}>
      <Button onClick={onClick} size={size} type={type} style={style} htmlType={htmlType}>
        {text}
      </Button>
    </span>
  );
};

export default ButtonComponent;
