import React, {Component} from 'react';
import {StyleSheet , View , Text , Button ,FlatList , TextInput} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from './actions';
import ListItem from './components/ListItem';
import { bindActionCreators } from 'redux';
class ReduxSavePlace extends Component{
        state ={
           // placeName : '',
            MenampungplacesName: [],
        };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() == ''){ //untuk mengecek data yang kosong
            return;
        }
        this.props.add(this.state.placeName);
    };

    placeNameChangeHandler = value =>{
        this.setState({
            placeName : value ,
        });
    };
    placesOutput = () =>{
     
        return(
            <FlatList
            style={styles.ListContainer}
            data={this.props.tempat}
            keyExtractor = {(item,index) => index.toString()}
            renderItem = {info => <ListItem placeName = {info.item.value}/>}/>
        
        )
    }
    render(){
        console.log('Data props Reducer')
        console.log(this.props.tempat);
        return(
            <View style = {styles.Container}>
                <View style = {styles.container}>
                <TextInput
                placeholder = "SEACH PLACES"
                style = {styles.placeInput}
                value = {this.state.placeName}
                onChangeText = {this.placeNameChangeHandler}/>
                <Button 
                title = 'ADD'
                style = {styles.placeButton}
                onPress = {this.placeSubmitHandler}/>
            </View>
            <View style = {styles.ListContainer}>
            {this.placesOutput()}</View>
            </View>
        );   
    };

}
const styles = StyleSheet.create({
    Container : {
        paddingTop : 38,
        justifyContent:'flex-start',
        alignItems : 'center'
    },
    inputCotainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
    },
    placeInput : {
        width : '70%',

    },
    placeButton : {
        width : '30%',
    },
    ListContainer : {
        width : '100%'
    },
})
const mapStateTopProps = state => {
    return {
        tempat : state.listPlaces.places,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        add: name =>{
            dispatch(addPlace(name)); //dispatch menghubungkan action menuju reducers
        },
    };
}
// return bindActionCreators({add:addPlace},dispatch);//dispatch menghubungkan action menuju reducers
export default connect(
    mapStateTopProps,
    mapDispatchToProps,)
    (ReduxSavePlace);
