import React, { PureComponent } from "react";

export const ModalContext = React.createContext();
export const ModalConsumer = ModalContext.Consumer;

interface IState {
  alertText: object;
  showAlertModal: boolean;
  showLoading: boolean;
  toggleAlertModal: void;
}
class ModalProvider extends PureComponent<IState> {
  public state = {
    alertText: {
      description: "",
      title: "",
    },
    setAlertText = (type: string) => {
      const deviceLocale = await DeviceInfo.getDeviceLocale();
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
    showLoading: false,
    toggleAlertModal: () =>
      this.setState(prevState => ({
        showAlertModal: !prevState.showAlertModal,
      })),
  };

  public render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;
