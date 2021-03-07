import React from "react";
// 벨로퍼트님의 블로그 참고하여 코드스플릿팅을 적용
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;

    state = { Component: AsyncComponent.Component };

    constructor(props) {
      super(props);
      if (AsyncComponent.Component) return;
    }

    componentDidMount = () => {
      getComponent().then(({ default: Component }) => {
        AsyncComponent.Component = Component;
        this.setState({ Component });
      });
    };

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}
