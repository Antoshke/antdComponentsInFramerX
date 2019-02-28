import * as React from "react";
import { PropertyControls, ControlType } from "framer";

type Props = { text: string };

export class Template_Code extends React.Component<Props> {
  
  render() {
    return <div style={style}>{this.props.text}</div>;
  }

  static defaultProps: Props = {
    text: "Hello World!"
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" }
  };
}

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};