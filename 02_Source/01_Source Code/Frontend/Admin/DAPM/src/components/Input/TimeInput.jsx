import { TimePicker, ConfigProvider } from "antd";

function TimeInput({ height = 38, ...rest }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#695eef",
          controlHeight: height,
        },
      }}
    >
      <TimePicker
        inputReadOnly={true}
        needConfirm={false}
        showNow={false}
        {...rest}
      />
    </ConfigProvider>
  );
}

export default TimeInput;
