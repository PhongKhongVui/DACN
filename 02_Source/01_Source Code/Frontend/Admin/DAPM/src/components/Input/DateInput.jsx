import { DatePicker, ConfigProvider } from "antd";

function DateInput({ height = 38, ...rest }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#695eef",
          controlHeight: height,
        },
      }}
    >
      <DatePicker inputReadOnly={true} showNow={false} {...rest} />
    </ConfigProvider>
  );
}

export default DateInput;
