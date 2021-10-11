import { render } from '@testing-library/react';
import ChatsList from './ChatsList';
import { Provider } from 'react-redux';
import { store } from '../../store.js';

describe('Snapshot_test', () => {
    test('ChatList Test', () => {
        let component = render(
            <Provider store={store}>
                <ChatsList />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    })
})