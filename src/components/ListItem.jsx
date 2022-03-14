import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    
    render() {
        const { addItem, removeItem, itemName, itemCount } = this.props;
        // List of items with option to add and remove them
        return (
            <li>
                <div style={{"margin-right":10}}>{itemName}</div>
                <button onClick = {() => addItem(itemName)}>+</button>
                {itemCount > 0 ? <button onClick = {() => removeItem(itemName)}>-</button> : null}
                <div style={{"margin-top": 5}}>{itemCount}</div>
            </li>
        );
    }
}

ListItem.propTypes = {
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    itemName: PropTypes.string,
    itemCount: PropTypes.number,
}

export default ListItem;
