import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setMessage } from '../../store/messageSlice';

const MessageComponent: React.FC = () => {
  const message = useSelector((state: RootState) => state.message.message);
  const dispatch: AppDispatch = useDispatch();

  const updateMessage = () => {
    dispatch(setMessage('Hello from Redux Toolkit!'));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Message:</h1>
      <p>{message}</p>
      <button
        className="btn btn-primary"
        onClick={updateMessage}
      >
        Update Message
      </button>
    </div>
  );
};

export default MessageComponent;