import React from 'react'

class Counter extends React.Component {
    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>);
    }
}

export default Counter;