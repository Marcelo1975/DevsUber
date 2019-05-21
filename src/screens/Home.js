import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Platform, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

import SearchBox from '../components/Home/SearchBox';

const GOOGLE_MAPS_APIKEY = "AIzaSyA2KeS4ZYdDSEMalH86f_PAIukTNGJsNDo";

export class Home extends Component {
    watchId = null;

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
            destLocation:{
                latitude:0,
                longitude:0
            },
            isLoading:false,
            loadingMsg:'',
            warnHeight:new Animated.Value(0)
        };

        this.setWarning = this.setWarning.bind(this);
        this.getCurrentLoction = this.getCurrentLoction.bind(this);
        this.requestLocPermission = this.requestLocPermission.bind(this);
        this.seachBoxClick = this.seachBoxClick.bind(this);
    }

    componentDidMount() {
        this.getCurrentLoction();
    }

    getCurrentLoction = async () => {
        this.setWarning(true, 'Procurando sua localização...');
        if(await this.requestLocPermission()) {
            this.watchId = Geolocation.watchPosition(
                (position) => {
                    this.setWarning(false, '');
                    this.setState({
                        currentLocation:{
                            latitude:position.coords.latitude,
                            longitude:position.coords.longitude,
                            latitudeDelta:0.004,
                            longitudeDelta:0.004
                        }
                    });
                },
                (error) => {
                    this.setWarning(false, '');
                    alert("ERROR NA LOC: "+error.message);
                },
                {enableHighAccuracy:true, interval:5000, timeout:15000, maximumAge:10000}
            );
        } else {
            this.setWarning(false, '');
        }
    }

    requestLocPermission = async () => {
        if(Platform.OS == 'android') {
            try {
                const g = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title:'Pegar localização',
                        message:'Este aplicativo precisa acessar sua localização'
                    }
                );
                if(g == PermissionsAndroid.RESULTS.GRANTED) {
                    return true;
                } else {
                    return false;
                }
            } catch(e) {
                return false;
            }
        } else {
            return true;
        }
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

    seachBoxClick(item) {
        this.setState({
            destLocation:{
                latitude:item.lat,
                longitude:item.lng
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.currentLocation}
                >
                    <MapView.Marker coordinate={this.state.currentLocation} />
                    {this.state.destLocation.latitude != 0 &&
                        <MapView.Marker coordinate={this.state.destLocation} />
                    }
                    {this.state.destLocation.latitude != 0 &&
                        <MapViewDirections
                            origin={this.state.currentLocation}
                            destination={this.state.destLocation}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={5}
                            strokeColor="#000000"
                        />
                    }
                </MapView>
                <Animated.View style={[styles.warnBox, {height:this.state.warnHeight}]}>
                    <Text style={styles.warnText}>{this.state.loadingMsg}</Text>
                </Animated.View>
                <SearchBox dataClick={this.seachBoxClick} />
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