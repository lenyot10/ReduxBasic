import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ImageBackground,Button,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {addCity} from './actions/index';
import ListItem from './components/ListItem';

class ReduxSaveCity extends Component{
    state ={
        cityName : '',
    }
    pengelolahsubmit = () => {
        if(this.state.cityName.trim() === ''){
            return;
        }
        console.log(this.state.cityName)
        this.props.add(this.state.cityName);

    }
    placeNameChangehendler = value =>{
        this.setState({
            cityName : value ,
        })
    }

placesOutput = () =>{
     
    return(
        <FlatList
        style={styles.ListContainer}
        data={this.props.dataCity}
        keyExtractor = {(item,index) => index.toString()}
        renderItem = {info => <ListItem placeName = {info.item.value}/>}/>
    
    )
}
render(){
    console.log('Data props Reducer')
    console.log(this.props.dataCity);
    return(
        <View style = {styles.Container}>
            <View style = {styles.container}>
            <TextInput
            placeholder = "SEACH PLACES"
            style = {styles.placeInput}
            value = {this.state.cityName}
            onChangeText = {this.placeNameChangehendler}/>
            <Button 
            title = 'ADD'
            style = {styles.placeButton}
            onPress = {this.pengelolahsubmit}/>
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
        dataCity : state.listCity.dataCity,
    };
};
const mapDispatchToProps = dispatch => {
    return{
        add: name =>{
            dispatch(addCity(name)); //dispatch menghubungkan action menuju reducers
        },
    };
}

export default connect(
    mapStateTopProps,
    mapDispatchToProps,)
    (ReduxSaveCity);