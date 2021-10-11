import chatReducer from "./chat.reduser";
import { GET_CHAT } from "./chat.action";
import { render } from '@testing-library/react';
import Dialog from '../Dialog/Dialog';
import { Provider } from 'react-redux';
import { store } from '../../store.js';



describe('chat_reduser', () => {
    test('is correct', () => {
        const action = {type: GET_CHAT, payload: [1, 2, 3]};
        const initialState = [1, 2, 3]

        expect(chatReducer(undefined, action)).toEqual(initialState);
    });

    test('GET_CHAT', () => {
        const action = {payload: []};

        expect(chatReducer(undefined, action)).toMatchSnapshot()
    })
})

describe('Snapshot_test', () => {
    test('Dialog Test', () => {
        let component = render(
            <Provider store={store}>
                <Dialog />    
            </Provider>
        );

        expect(component).toMatchSnapshot();
    })
})