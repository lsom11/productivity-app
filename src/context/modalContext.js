import React, { PureComponent } from "react";

const ModalContext = React.createContext();
const { Provider, Consumer } = ModalContext;

class ModalProvider extends PureComponent {
  state = {
    alertText: {
      description: "This is a description",
      title: "Great title!",
    },
    setAlertText: (type, locale) => {
      this.setState({
        alertText: {
          description: "Test 2",
          title: "Test",
        },
      });
    },
    setShowLoading: () =>
      this.setState(prevState => ({ showLoading: !prevState.showLoading })),
    showAlertModal: false,
    showLoading: true,
    toggleAlertModal: () =>
      this.setState(prevState => ({
        showAlertModal: !prevState.showAlertModal,
      })),
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { ModalContext, Consumer };
export default ModalProvider;
