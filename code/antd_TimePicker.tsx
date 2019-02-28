import * as React from "react";
import { TimePicker } from 'antd';
import * as moment from 'moment';
import { PropertyControls, ControlType } from "framer";
import 'antd/dist/antd.css';

type Props = { format: string };

export class antd_timePicker extends React.Component<Props> {

  render() {
    return (
      <TimePicker defaultValue={moment('13:08', 'HH:mm')} format={this.props.format} />
    );
  }

  static defaultProps: Props = {
    format: 'HH:mm'
  };

  static propertyControls: PropertyControls<Props> = {
    format: { type: ControlType.String, title: "Time format" }
  };

}
