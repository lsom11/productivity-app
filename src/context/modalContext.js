import React, { PureComponent } from "react";

const ModalContext = React.createContext();
const { Provider, Consumer } = ModalContext;

class ModalProvider extends PureComponent {
  state = {
    alertText: {
      description: "This is a description",
      title: "Great title!",
    },
    setAlertText: ({ title, description }) => {
      this.setState({
        alertText: {
          description,
          title,
        },
      });
    },
    setDrawerNav: (openDrawer, closeDrawer) =>
      this.setState({
        closeDrawer: () => closeDrawer(),
        openDrawer: () => openDrawer(),
      }),
    setShowLoading: () =>
      this.setState(prevState => ({ showLoading: !prevState.showLoading })),
    showAlertModal: false,
    showLoading: false,
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
