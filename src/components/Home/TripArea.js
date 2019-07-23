import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { makeTripSearch } from '../../DevsUberAPI';

export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tripAreaBottom:new Animated.Value(-200),
            trips:[]
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.tripAreaBottom,
            {
                toValue:0,
                duration:2000
            }
        ).start();

        makeTripSearch(this.props.origin, this.props.destination)
            .then((trips) => {
                this.setState({trips});
            })
            .catch((err) => {
                alert("Opss, ocorreu um erro!");
                this.props.cancelClick();
            });
    }

    render() {
        return (
        <Animated.View style={[styles.container, {bottom:this.state.tripAreaBottom}]}>
            {this.state.trips.length == 0 &&
                <Text>Buscando Preços...</Text>
            }
            {this.state.trips.length > 0 &&
                <View>
                    <Text>{this.state.trips.length} tipos</Text>
                </View>
            }
        </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        height:200,
        position:'absolute',
        left:20,
        right:20,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderWidth:1,
        borderColor:'#CCCCCC',
        elevation:4,
        shadowOffset:{width:20, height:20},
        shadowColor:'#000000',
        shadowOpacity:0.5,
        shadowRadius:10
    }
});