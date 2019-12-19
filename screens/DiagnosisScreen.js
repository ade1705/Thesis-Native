import React, {Component} from 'react';
import {View, Image, ImageBackground, Text} from "react-native";
import styles from "../assets/styles.css";
const imageOfPlant = 'https://laughingsquid.com/wp-content/uploads/2014/08/blincoe-5-750x750.jpg';
const imageBackground = 'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

class DiagnosisScreen extends Component {
    render() {
        return (
            <ImageBackground
                source = {{ uri: imageBackground }}
                style={{width: '100%', height: '100%'}}>
                <View style={[styles.flex, styles.justifyContentsCenter, styles.padding30]}>
                    <View style={[styles.height300, styles.shadow]}>
                        <Image
                            resizeMode={'cover'}
                            style={{ width: '100%', height: 300 }}
                            source={{uri: imageOfPlant}}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.marginTop20]}>
                        <View>
                            <Text style={[styles.mutedText]}>Apple</Text>
                            <Text style={[styles.XlargeText]}>Big Apple Disease</Text>
                            <Text style={[styles.marginTop10, styles.mutedText]}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                            </Text>
                        </View>
                        <View>
                            <Text>dfjk</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default DiagnosisScreen;
