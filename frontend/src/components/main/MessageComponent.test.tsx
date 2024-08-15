import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store/store';
import messageReducer, { setMessage } from '../../store/messageSlice';
import MessageComponent from './MessageComponent';

// Create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      message: messageReducer,
    },
  });
};

describe('MessageComponent', () => {
  test('renders the component with initial state', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <MessageComponent />
      </Provider>
    );

    // Check initial message
    expect(screen.getByText(/Message:/)).toBeInTheDocument();
    expect(screen.getByText(/Update Message/)).toBeInTheDocument();
  });

  test('updates message when button is clicked', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <MessageComponent />
      </Provider>
    );

    // Click the button
    fireEvent.click(screen.getByText(/Update Message/));

    // Check the updated message
    const state = store.getState() as RootState;
    expect(state.message.message).toBe('Hello from Redux Toolkit!');
  });
});