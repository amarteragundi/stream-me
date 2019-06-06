import React from "react";
import { connect } from "react-redux";
import { FetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.FetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.currentStream) {
      return <div>Loading ... </div>;
    }
    return <div>{this.props.currentStream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return {
    currentStream: state.streams[streamId]
  };
};
export default connect(
  mapStateToProps,
  { FetchStream }
)(StreamEdit);
