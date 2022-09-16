/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TextInput, Text, Alert, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';
import TitleBar from '../../components/TitleBar';
import styles from '../../styles/Style';
import {deviceActions} from '../../reducers/device';

const UserDevice = ({route, navigation}) => {
    const dispatch = useDispatch();
    const pairing = useSelector((state) => state.device.pairing);
    const [device, setDevice] = useState([]);

    const handleInput = (key, value) => {
        setDevice({
            ...device,
            [key]: value,
        });
    };

    const setHeaterName = () => {
        if (device.device_name) {
            const device_name = device.device_name;
            const update = {...pairing, device_name};

            dispatch(deviceActions.setPairing(update)).then((res) => {
                navigation.navigate('UserWifi');
            });
        } else {
            Alert.alert('Device Error', 'Must fill out device name', [{text: 'OK', onPress: () => console.log('OK Pressed')}], {cancelable: false});
        }
    };

    return (
        <View style={styles.appContainer}>
            <TitleBar
                navigation={navigation}
                title="Name Your Tankless"
                backButton={true}
                backNav="back"
                subTitle={false}
                drawer={false}
                transparent={true}
            />
            <View
                style={{
                    ...styles.formBox,
                    backgroundColor: '#ffffff',
                    flex: 0.8,
                    borderRadius: 10,
                    marginTop: 50,
                    marginBottom: 50,
                    padding: 20,
                }}>
                <Text style={{...styles.h3, fontWeight: '300', marginBottom: 30}}>
                    Give your tankless a unique name. This will help you organize your personalized settings in the future.
                </Text>
                <KeyboardAvoidingView
                    style={{
                        width: '100%',
                        margin: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    behavior="padding">
                    <View style={{...styles.formField, borderWidth: 1}}>
                        <Text style={styles.loginLabel}>Heater Name:</Text>
                        <TextInput
                            onChangeText={(device_name) => handleInput('device_name', device_name)}
                            style={styles.loginInput}
                            autoCapitalize="none"
                            placeholder="Ex. 'Home Basement', 'Lake House'"
                            placeholderTextColor="#697179"
                            underlineColorAndroid="transparent"
                            keyboardAppearance="dark"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            <Button
                full
                transparent
                style={[
                    styles.itemWindow,
                    {
                        minHeight: 0,
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 10,
                    },
                ]}
                onPress={() => setHeaterName()}>
                <Text
                    style={{
                        color: '#000000',
                        textAlign: 'right',
                        fontWeight: '500',
                        fontSize: 14,
                    }}>
                    Continue
                </Text>
            </Button>
        </View>
    );
};

export default UserDevice;
