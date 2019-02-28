import * as React from "react";
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';

export class antd_button extends React.Component {

  render() {
    return (
      <Button type="primary">
        <Icon type="left" />Backward
      </Button>
    )
  }
  
}