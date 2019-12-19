import React, {Component} from 'react';
import {View, Image, ActivityIndicator, ImageBackground, Text, TouchableOpacity} from "react-native";
import styles from "../assets/styles.css";
import ProgressCircle from 'react-native-progress-circle'
import {AntDesign} from "@expo/vector-icons";
import * as PropTypes from "prop-types";
import {fetchDiagnosis} from "../lib/diagnosis/diagnosisFetcher";
const imageOfPlant = 'https://laughingsquid.com/wp-content/uploads/2014/08/blincoe-5-750x750.jpg';
const imageBackground = 'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

const DiagnosisLoader = () => {
    return <View style={[styles.padding30, styles.flexColumn, styles.alignItemsCenter]}>
        <View>
            <ActivityIndicator size="large" color="green"/>
            <Text style={[styles.largeText]}>Loading diagnosis</Text>
        </View>
    </View>;
};

const ErrorBlock = () => {
    return <View style={[styles.padding30, styles.flexColumn, styles.alignItemsCenter]}>
        <View>
            <Text style={[styles.largeText]}>Error, Please try again.</Text>
        </View>
    </View>;
};

const DiagnosisBlock = (props) => {
    return <View style={[styles.flexRow, styles.marginTop20, styles.alignItemsEnd]}>
        <View style={[styles.flex]}>
            <Text style={[styles.mutedText]}>{props.diagnosis.plant}</Text>
            <Text style={[styles.XlargeText]}>{props.diagnosis.disease}</Text>
            <Text style={[styles.marginTop10, styles.mutedText]}>{props.diagnosis.description}</Text>
        </View>
        <View style={[styles.paddingLeft10]}>
            <ProgressCircle
                percent={props.diagnosis.percentage}
                radius={30}
                borderWidth={4}
                color="green"
                shadowColor="#ddd"
                bgColor="#fff"
            >
                <Text style={[styles.boldText, styles.textPrimary]}>{props.diagnosis.percentage}%</Text>
            </ProgressCircle>
        </View>
    </View>;
};

DiagnosisBlock.propTypes = {diagnosis: PropTypes.any};

class DiagnosisScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            loading: false,
            error: false,
            diagnosis: {
                image: imageOfPlant,
                plant: 'Apple',
                disease: 'Big Apple Disease',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
                percentage: 85
            }
        };
    }

    async componentDidMount() {
        let imageUrl = this.props.navigation.getParam('imageUri', '');
        this.setState({ loading: true });
        //check if image is therre and throw error
        this.setState({ diagnosis: { ...this.state.diagnosis, image: imageUrl}});
        try {
            const response = await fetchDiagnosis(this.state.diagnosis);
            const json = await response.json();
            console.log(json);
            this.setState({ loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ loading: false, error: true });
        }
    };

    startAgain() {
        this.props.navigation.navigate('SplashScreen');
    };

    render() {
        let { diagnosis, loading, error } = this.state;
        return (
            <ImageBackground
                source = {{ uri: imageBackground }}
                style={{width: '100%', height: '100%'}}>
                <View style={[styles.flex, styles.justifyContentsCenter, styles.padding30]}>
                    <View style={[styles.height300, styles.shadow]}>
                        <Image
                            resizeMode={'cover'}
                            style={{ width: '100%', height: 300 }}
                            source={{uri: diagnosis.image }}
                        />
                    </View>
                    {error && <ErrorBlock/>}
                    {loading && error === false ? <DiagnosisLoader/> : <DiagnosisBlock diagnosis={diagnosis}/> }
                    <View style={[styles.paddingTop30]}>
                        <TouchableOpacity
                            style={[styles.primaryBackground, styles.padding15, styles.borderRadius, styles.flexRow, styles.alignItemsCenter]}
                            onPress={() => this.startAgain()}>
                            <AntDesign name="reload1" size={30} style={[styles.TextWhite]}/>
                            <Text style={[styles.largeText, styles.TextWhite, styles.paddingLeft10]}>Start Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default DiagnosisScreen;
