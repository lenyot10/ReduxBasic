import React, {Component} from 'react';
import {StyleSheet , View , Text , TouchableOpacity} from 'react-native';

const ListItem = props =>{
    return(
        <TouchableOpacity>
            <View style = {styles.ListItem}></View>
            <Text>{props.placeName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ListItem : {
        width : '100%',
        padding : 10,
        marginBottom :10,
        backgroundColor : '#eee'
    }
})
export default ListItem;