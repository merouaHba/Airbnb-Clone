import React, { useEffect, useState } from 'react'
import { DateRangePicker, Stack } from "rsuite";
import { date, open } from '../typing'
const { combine, allowedMaxDays, before} = DateRangePicker;

const DatePicker = ({open,setDateValue,value}:any) => {
  // const [value, setValue] = useState<date>([new Date(), new Date()])
  useEffect(() => {
    console.log(value)
  },[value])
  return (
    <Stack direction="column" spacing={8} alignItems="flex-start">
      <DateRangePicker
        value={value}
        onChange={setDateValue}
        onOk={setDateValue}
        open={open}
        // disabledDate={before(new Date())}
      />

      {/* <DateRangePicker
        value={value}
        onChange={() => setValue}
        showMeridian
        format="yyyy-MM-dd HH:mm:ss"
        defaultCalendarValue={[
          new Date("2022-02-01 00:00:00"),
          new Date("2022-03-01 23:59:59"),
        ]}
      /> */}
    </Stack>
  );
}

export default DatePicker