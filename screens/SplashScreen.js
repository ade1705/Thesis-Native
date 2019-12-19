import React, {Component} from 'react';
import {View, ImageBackground, Text, TouchableOpacity, Image} from "react-native";
import styles from '../assets/styles.css';
import { EvilIcons, Foundation } from '@expo/vector-icons';
const imageBackground = 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80';
const logo = '../assets/images/tut.png';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class SplashScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            image: null
        };
    }
    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            this.props.navigation.navigate('DiagnosisScreen', {imageUri: result.uri});
        }
    };

    render() {
        return (
            <ImageBackground
                source = {{ uri: imageBackground }}
                style={{width: '100%', height: '100%'}}>
                <View style={[styles.flex, styles.justifyContentsEnd, styles.padding30]}>
                    <View>
                        <Image
                            source={require(logo)}
                        />
                    </View>
                    <Text style={[styles.bigText, styles.TextWhite]}>Get Plant Disease Diagnoses, Fast.</Text>
                    <Text style={[styles.largeText, styles.TextWhite, styles.paddingTop20]}>Adedoja Adedamola, 212493007</Text>
                    <Text style={[styles.TextWhite, styles.mutedText]}>TUT Mcomp. Computer Systems Engineering.</Text>
                    <View style={[styles.marginTop40]}>
                        <TouchableOpacity
                            style={[styles.whiteBackground, styles.padding15, styles.borderRadius, styles.flexRow, styles.alignItemsCenter]}
                            onPress={this._pickImage}>
                            <EvilIcons name="image" size={30}/>
                            <Text style={[styles.largeText]}>Choose Leaf Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.whiteBackground, styles.padding15, styles.borderRadius, styles.flexRow, styles.alignItemsCenter, styles.marginTop20, ]}>
                            <EvilIcons name="camera" size={30}/>
                            <Text style={[styles.largeText]}>Take Photo of Leaf</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default SplashScreen;
