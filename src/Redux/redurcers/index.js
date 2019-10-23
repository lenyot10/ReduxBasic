import {combineReducers} from 'redux';
import countReducer from './countReducers';
import placeReducers from './placeRedurcers';
import cityredurcers from './cityredurcers';
const allReducers = combineReducers({
    count : countReducer,
    listPlaces : placeReducers,
    listCity : cityredurcers,
})
export default allReducers;