import React from "react";
import DateString from "../atoms/text/DateString";
import Clock from "../atoms/text/Clock";

interface Props {
  readonly className?: string;
};

function DateClock(props: Props) {
  return (
    <div className={`flex gap-6 font-medium ${props.className}`}>
      <DateString />
      <Clock />
    </div>
  );
}

export default DateClock;
