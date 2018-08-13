import * as React from 'react';

export interface HeaderProps {
  title: string;
  content?: string;
}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return <h1>我在学习 {this.props.title} !</h1>;
  }
}
