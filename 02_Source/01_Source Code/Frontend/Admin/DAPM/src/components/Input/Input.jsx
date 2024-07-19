import { Input as AntdInput, ConfigProvider } from "antd";
import React from "react";

const Input = React.forwardRef(function ({ height = 38, ...rest }, ref) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeShadow: "none",
          },
        },
        token: {
          colorPrimary: "#695eef",
          controlHeight: height,
          borderRadius: 4,
          fontSize: 14,
        },
      }}
    >
      <AntdInput {...rest} />
    </ConfigProvider>
  );
});

export default Input;
