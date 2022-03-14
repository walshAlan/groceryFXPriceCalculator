import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from'lodash.get'
import ListItem from './containers/ListItem';
import Checkout from './containers/Checkout';
import { isEqual } from 'lodash';

class App extends Component {
    
    componentDidMount() {
      const { fetchPrices } = this.props;
      fetchPrices();
    }

    render() {
        const { items, checkingOut } = this.props;
        return (
          <div>
            {/* Show the list of items when not checking out  and vice versa*/}
            {
              !checkingOut ?
              <ul>
                {
                  items.map(item => {
                    return (
                      <ListItem itemName={item}></ListItem>
                    );
                  }
                  )}
              </ul> : null
            }
            <Checkout></Checkout>
          </div>
        );
    }
}


App.propTypes = {
  items: PropTypes.array,
  checkingOut: PropTypes.bool
};

export default App;

