import React from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
  }
  render() {
    return <div>StreamList</div>;
  }
}
const mapStateToProps = state => {
  return state.streams;
};
export default connect(
  null,
  { FetchStreams }
)(StreamList);
