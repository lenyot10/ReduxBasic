import {ADD_CITY} from '../actions/type';
const initial = {
    dataCity : [],
}
const cityredurcers = (state = initial , action)=> {
    switch (action.type) {
        case ADD_CITY:
                return{
                    ...state,
                    dataCity : state.dataCity.concat({
                        key :Math.random(),
                        value :action.payload
                    })
                };
                default:
                    return state;
            }
        }
            
  export default cityredurcers;

    
