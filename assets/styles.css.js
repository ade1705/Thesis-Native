import {Platform, StyleSheet} from "react-native";

const primaryColor = '#2e3092';
const blueColor = '#0261FE';
const orangeColor = '#EE5C3E';
const greenColor = '#48AD76';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerPaddingHorizontal: {
        paddingTop: 40,
        paddingBottom: 40
    },
    scrollViewContainer: {
        flex: 1,
        padding: 30,
        height: '100%'
    },
    flex: {
        flex: 1
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        height: '100%'
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    justifyContentsEnd: {
        justifyContent: 'flex-end',
    },
    justifyContentsCenter: {
        justifyContent: 'center',
    },
    justifyContentsSpaceBetween: {
        justifyContent: 'space-between',
    },
    textBlue: {
        color: blueColor
    },
    textPrimary: {
        color: primaryColor
    },
    mutedText: {
        opacity: 0.5
    },
    TextWhite: {
        color: '#fff'
    },
    TextCenter: {
        textAlign: 'right'
    },
    boldText: {
        fontWeight: "600",
    },
    smallText: {
        fontSize: 12,
    },
    jumboText: {
        fontSize: 16,
        fontWeight: "600",
    },
    largeText: {
        fontSize: 20,
        fontWeight: "600",
    },
    XlargeText: {
        fontSize: 30,
        fontWeight: "600",
    },
    bigText: {
        fontSize: 45,
        fontWeight: "600",
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    paddingTop5: {
        paddingTop: 5
    },
    paddingTop10: {
        paddingTop: 10
    },
    paddingTop20: {
        paddingTop: 20
    },
    paddingTop30: {
        paddingTop: 30
    },
    paddingBottom5: {
        paddingBottom: 5
    },
    paddingBottom10: {
        paddingBottom: 10
    },
    paddingBottom30: {
        paddingBottom: 30
    },
    paddingLeft0: {
        paddingLeft: 0
    },
    paddingLeft5: {
        paddingLeft: 5
    },
    paddingLeft10: {
        paddingLeft: 10
    },
    paddingLeft20: {
        paddingLeft: 20
    },
    paddingRight20: {
        paddingRight: 20
    },
    paddingX25: {
        paddingRight: 25,
        paddingLeft: 25,
    },
    paddingY10: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    padding5: {
        padding: 5
    },
    padding10: {
        padding: 10
    },
    padding15: {
        padding: 15
    },
    padding20: {
        padding: 20
    },
    padding30: {
        padding: 30
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop20: {
        marginTop: 20
    },
    marginTop40: {
        marginTop: 40
    },
    marginBottom5: {
        marginBottom: 5
    },
    marginBottom10: {
        marginBottom: 10
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginBottom30: {
        marginBottom: 30
    },
    marginLeftMinus5: {
        marginLeft: -20
    },
    marginVertical5: {
        marginRight: 5,
        marginLeft: 5
    },
    marginHorizontal10: {
        marginTop: 10,
        marginBottom: 10
    },
    formInput: {
        padding: 13,
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: '100%',
        marginTop: 10,
    },
    formButton: {
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: primaryColor,
        color: '#fff',
        width: '100%',
        marginTop: 10,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteBackground: {
        backgroundColor: '#fff'
    },
    greyBackground: {
        backgroundColor: '#eff3f6'
    },
    primaryBackground: {
        backgroundColor: primaryColor
    },
    blueBackground: {
        backgroundColor: blueColor
    },
    orangeBackground: {
        backgroundColor: orangeColor
    },
    greenBackground: {
        backgroundColor: greenColor
    },
    outerCircle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: '#ccc',
    },
    innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    borderRadius: {
        borderRadius: 5,
    },
    borderRadius20: {
        borderRadius: 15,
    },
    borderRadius30: {
        borderRadius: 30,
    },
    borderBottomRightRadius0: {
      borderBottomRightRadius: 0,
    },
    borderTopRadius30: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    shadow: {
        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,

        elevation: 5,
    },
    width25: {
        width: '25%'
    },
    overflowHidden: {
        overflow: 'hidden'
    },
    height100vh: {
        height: '100%'
    },
    height100: {
        height: 100
    },
    height300: {
        height: 300
    },
    bottomLine: {
        marginTop: 5,
        height: 3,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#eee',
    }
});

export default styles;
