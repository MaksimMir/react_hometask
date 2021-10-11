import { render } from '@testing-library/react';
import Message from './Message';
import { Provider } from 'react-redux';
import { store } from '../../store.js';
import { BrowserRouter } from 'react-router-dom';

describe('Snapshot_test', () => {
    test('Message Test', () => {
        let component = render(
            <Provider store={store}>
                <BrowserRouter>
                <Message />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    })
})