import * as React from "react";
import { Button, Icon } from 'antd';

export class antdButton extends React.Component {

  render() {
    return (
      <Button type="primary">
        <Icon type="left" />Backward
      </Button>
    )
  }
  
}