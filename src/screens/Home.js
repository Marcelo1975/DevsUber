import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

export class Home extends Component {

    static navigationOptions = {
        title:'DevsUber 1.0',
        headerStyle:{
            backgroundColor:'#0A5360'
        },
        headerTintColor:'#FFFFFF',
        headerTitleStyle:{
            fontWeight:'bold',
            textAlign:'center',
            flex:1
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            currentLocation:{
                latitude:-23.7,
                longitude:-46.8,
                latitudeDelta:0.004,
                longitudeDelta:0.004
            },
            isLoading:false,
            loadingMsg:'',
            warnHeight:new Animated.Value(0)
        };

        this.setWarning = this.setWarning.bind(this);
    }

    componentDidMount() {
        this.setWarning(true, 'Procurando sua localização...');

        setTimeout(() => {
            this.setWarning(false, '');
        }, 3000);
    }

    setWarning(status, msg) {
        if(status === true && msg != '') {
            this.setState({
                isLoading:status,
                loadingMsg:msg
            });
            
            Animated.timing(
                this.state.warnHeight,
                {
                    toValue:30,
                    duration:300
                }
            ).start();
        } else if(status === false) {
            this.setState({
                isLoading:status,
                loadingMsg:''
            });
            
            Animated.timing(
                this.state.warnHeight,
                {
                    toValue:0,
                    duration:300
                }
            ).start();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.currentLocation}
                >
                </MapView>
                <Animated.View style={[styles.warnBox, {height:this.state.warnHeight}]}>
                    <Text style={styles.warnText}>{this.state.loadingMsg}</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    map:{
        flex:1
    },
    warnBox:{
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center'
    },
    warnText:{
        fontSize:13,
        color:'#FFFFFF'
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const HomeConnect = connect(mapStateToProps, {})(Home);
export default HomeConnect;