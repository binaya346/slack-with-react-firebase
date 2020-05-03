import React from "react";
import { Button, Segment, Input } from "semantic-ui-react";
import firebase from "../../firebase";

class MessageForm extends React.Component {
  state = {
    message: "",
    messageRef: this.props.messageRef,
    channel: this.props.channel,
    user: this.props.user,
    loading: false,
    errors: [],
  };
  handleMessage = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  setMessage = () => {
    const message = {
      content: this.state.message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL,
      },
    };
    return message;
  };
  handleSubmit = () => {
    const { message, channel, messageRef } = this.state;
    if (message) {
      this.setState({ loading: true });
      messageRef
        .child(channel.id)
        .push()
        .set(this.setMessage())
        .then(() => {
          this.setState({ message: "", loading: false, errors: [] });
        })
        .catch((err) =>
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          })
        );
    } else {
      this.setState({
        errors: this.state.errors.concat({
          message: "Please enter message to send",
        }),
      });
    }
  };
  render() {
    const { message, loading, errors } = this.state;
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
          placeholder="Write your message"
          onChange={this.handleMessage}
          value={message}
          className={
            errors.some((error) => error.message.includes("message"))
              ? "error"
              : ""
          }
        />
        <Button.Group icon widths="2">
          <Button
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            disabled={loading}
            onClick={this.handleSubmit}
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessageForm;
