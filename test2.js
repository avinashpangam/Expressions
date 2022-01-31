class App extends React.Component {
  enableWebcam = () => this.setState({ webcamEnabled: true });

  constructor(props) {
    super(props);
    this.state = { webcamEnabled: false };
  }

  render() {
    // ...
    return (
      <div>
        {this.state.webcamEnabled ? (
          <Webcam {...someProps} />
        ) : (
          <button type="button" onClick={this.enableWebcam}>
            Enable webcam
          </button>
        )}
        {/* ... */}
      </div>
    );
  }
}

default exports test2
