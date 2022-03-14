import { connect } from 'react-redux';
import ListItemComponent from '../components/ListItem';
import * as actionTypes from '../store/actionTypes';
import { selectItemCounts } from '../store/selectors/stocks';

const mapStateToProps = (state, ownProps) => {
    return {
        itemCount: selectItemCounts(state)[ownProps.itemName],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (itemName) => dispatch(
            {
                type: actionTypes.ADD_ITEM,
                payload: {
                    itemName,
                }
            }),
        removeItem: (itemName) => dispatch(
            {
                type: actionTypes.REMOVE_ITEM,
                payload: {
                    itemName,
                }
            }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);