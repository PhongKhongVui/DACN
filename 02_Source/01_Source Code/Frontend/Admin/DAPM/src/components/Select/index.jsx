import React from "react";
import { Select as AntdSelect, ConfigProvider } from "antd";
import { HiOutlineChevronDown } from "react-icons/hi";

const Select = React.forwardRef(function (
  { height = 38, fontSize = 14, ...rest },
  ref
) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            boxShadowSecondary: "none",
            fontSize: fontSize,
          },
        },
        token: {
          colorPrimary: "#695eef",
          controlHeight: height,
          boxShadowSecondary: "none",
          borderRadius: 4,
        },
      }}
    >
      <AntdSelect
        suffixIcon={<HiOutlineChevronDown />}
        {...rest}
        ref={ref}
      ></AntdSelect>
    </ConfigProvider>
  );
});

export default Select;
