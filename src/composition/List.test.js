import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('List component', () => {
    //smoke test
    it('renders without crashing', () => {
        const section = document.createElement('section')
        const props = [{title: 'title', content:'content'}];

        ReactDOM.render(
            <List 
                header = "header" 
                cards = { <Card {...props} /> }
            />, section
        );
        ReactDOM.unmountComponentAtNode(section);
    });
});