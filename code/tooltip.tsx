import * as React from "react";
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';

export class antdSelect extends React.Component {

  render() {
    return (
      <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    );
  }

}