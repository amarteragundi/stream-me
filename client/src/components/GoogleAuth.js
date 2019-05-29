import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "839187161044-qgb999rkbh9kk23ne3g30h4ado1tic9a.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange() {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }
  renderAuthBtn() {
    if (this.state.isSignedIn == null) {
      return <div>Not sure if we are logged in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed In</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleAuth;
