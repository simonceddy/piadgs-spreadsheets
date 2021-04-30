import { connect } from 'react-redux';
import {
  // useEffect,
  useState
} from 'react';
import Modal from '../../components/Modal';
import { addMessage, removeMessage } from '../../../store/actions';

function Messages({
  messages = [],
  // addNewMessage,
  deleteMessage
}) {
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   if (messages.length < 1) {
  //     addNewMessage('No messages!');
  //   }
  // }, [messages]);

  const onClose = () => setModalVisible(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalVisible(true)}
      >
        Messages
      </button>
      {!modalVisible ? null : (

        <Modal onClose={onClose}>
          <div className="flex flex-col justify-start items-start p-3">
            {messages.map((message, key) => (
              <div
                key={`message-${key}`}
                className="flex flex-row justify-between items-center"
                onClick={() => deleteMessage(message)}
                role="presentation"
              >
                {message}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages
});

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (message) => dispatch(addMessage(message)),
  deleteMessage: (message) => dispatch(removeMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
