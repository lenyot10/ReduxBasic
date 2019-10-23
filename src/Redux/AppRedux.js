import React, {Component} from 'react';
import allReducers from './redurcers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxSaveCity from './ReduxSaveCity';
// import Counter from './Counter';
// import ReduxSavePlace from './ReduxSavePlace';
const store = createStore(allReducers);
export default class AppRedux extends Component{
    render(){
        return(
            <Provider store ={store}>
                <ReduxSaveCity/>
            </Provider>
        )
    }
}