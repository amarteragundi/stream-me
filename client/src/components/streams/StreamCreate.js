import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { CreateStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.CreateStream(formValues);
  };

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a Title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a Description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);

const mapStateToProps = state => {
  return { userId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { CreateStream }
)(formWrapped);
