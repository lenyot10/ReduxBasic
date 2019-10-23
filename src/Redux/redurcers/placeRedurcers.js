import { ADD_PLACE }from '../actions/type';
const initialState = {
    placeName : '',
    places :[]//tampung nilai berupa aray
};
const placeReducers = (state = initialState,action)=>{
    switch(action.type){
        case ADD_PLACE:
        return{
            ...state,
            places : state.places.concat({
                key :Math.random(),
                value :action.payload
            })
        };
        default:
            return state;
    }
}

export default placeReducers;