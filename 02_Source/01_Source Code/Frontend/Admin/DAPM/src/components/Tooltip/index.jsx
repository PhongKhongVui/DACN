import Tippy from "@tippyjs/react";
import { ConfigProvider, Tooltip as AntToolTip } from "antd";
import React from "react";
import "tippy.js/dist/tippy.css";

const Tooltip = React.forwardRef(function ({ content, children }, ref) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 12,
          paddingXS: 8,
          lineHeight: 0.9,
          controlHeight: 10,
          borderRadius: 4,
        },
      }}
    >
      <AntToolTip ref={ref} title={content}>
        {children}
      </AntToolTip>
    </ConfigProvider>
  );
});

export default Tooltip;
