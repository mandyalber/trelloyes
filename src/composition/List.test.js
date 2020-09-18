import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    //smoke test
    it('renders without crashing', () => {
        const section = document.createElement('section')
        ReactDOM.render(
            <List header = "header" cards = {[]} />, section
        );
        ReactDOM.unmountComponentAtNode(section);
    });
    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List  header = "header" cards = {[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});