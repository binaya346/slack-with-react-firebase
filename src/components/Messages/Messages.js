import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import firebase from "../../firebase";
import Message from "./Message";

class Messages extends React.Component {
  state = {
    messages: [],
    messageRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    user: this.props.currentUser,
  };

  addListeners = (channelId) => {
    let loadedMessage = [];
    this.state.messageRef.child(channelId).on("child_added", (snap) => {
      loadedMessage.push(snap.val());
      this.setState({ messages: loadedMessage });
    });
  };
  displayMessage = (messages) =>
    messages.length > 0 &&
    messages.map((message) => (
      <Message
        message={message}
        user={this.state.user}
        key={message.timestamp}
      />
    ));

  componentDidMount() {
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id);
    }
  }
  render() {
    const { messageRef, user, channel, messages } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {this.displayMessage(messages)}
          </Comment.Group>
        </Segment>

        <MessageForm messageRef={messageRef} channel={channel} user={user} />
      </React.Fragment>
    );
  }
}
export default Messages;
