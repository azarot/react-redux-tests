import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import addCounter from './add-counter-reducer';

import Counter from './counter.js';
import reducer from './reducer.js';

const store = createStore(reducer);


const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
                 onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                 onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    );
};
render();

store.subscribe(render);