/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAvoidingView, TextInput, Text, View, TouchableOpacity, Alert, Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'native-base';
import Amplify from 'aws-amplify';
import TitleBar from '../../components/TitleBar';
import styles from '../../styles/Style';
import awsconfig from '../../aws-exports';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
import API from '../../services/API';

Amplify.configure(awsconfig);

const NewSchedule = ({navigation}) => {
    useDispatch();
    const device = useSelector((state) => state.device.view.device);
    const [startTime, setStartTime] = useState('START TIME');
    const [endTime, setEndTime] = useState('END TIME');
    const [toggleStart, setToggleStart] = useState(false);
    const [toggleEnd, setToggleEnd] = useState(false);
    const [time, setTime] = useState(new Date());
    const [durationTime, setDurationTime] = useState(time);
    const [timezone, setTimezone] = useState('');
    const [days, setDays] = useState({});
    const [scheduleName, setScheduleName] = useState('');

    const week = {
        0: 'Su',
        1: 'M',
        2: 'T',
        3: 'W',
        4: 'Th',
        5: 'F',
        6: 'S',
    };

    useEffect(() => {
        if (device.shadow) {
            setTimezone(device.shadow.timezone);
        }
    }, [device]);

    const showTimeSelector = (selector) => {
        if (selector === 'start') {
            setToggleEnd(false);
            setToggleStart(!toggleStart);
        } else {
            setToggleStart(false);
            setToggleEnd(!toggleEnd);
        }
    };

    const saveSchedule = async () => {
        if (Object.keys(days).length > 0 && scheduleName && startTime !== 'START TIME' && endTime !== 'END TIME') {
            await API.createSchedule(device.thing_name, device.id, scheduleName, startTime, endTime, days, timezone);
            navigation.navigate('Schedule');
        } else {
            Alert.alert(
                'Schedule Error',
                'Please Make sure you have a start time, an end time, and a schedule label',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
            );
        }
    };

    const selectStartTime = (event, selectedDate) => {
        if (selectedDate) {
            const date = new Date(selectedDate);
            var formatHour = moment(date).format('h:mm a');
            if (Platform.OS === 'android') {
                setToggleStart(false);
            }
            if (endTime === 'END TIME' || moment(date).isAfter(durationTime) || moment(date).toString() === moment(durationTime).toString()) {
                let endDate = moment(date).add(15, 'm').toDate();
                let formattedEndHour = moment(endDate).format('h:mm a');
                setEndTime(formattedEndHour);
                setDurationTime(date);
            }
            setStartTime(formatHour);
            setTime(date);
        }
    };

    const selectEndTime = (event, selectedDate) => {
        if (selectedDate) {
            const date = new Date(selectedDate);
            var formatHour = moment(date).format('h:mm a');
            if (Platform.OS === 'android') {
                setToggleEnd(false);
            }
            if (startTime === 'START TIME' || moment(date).isBefore(durationTime)) {
                const startDate = moment(date).subtract(15, 'm').toDate();
                const startTimeFormatted = moment(startDate).format('h:mm a');
                setStartTime(startTimeFormatted);
                setTime(date);
            }
            setEndTime(formatHour);
            setDurationTime(date);
        }
    };

    const selectDay = (day) => {
        const newDays = days;
        const index = Object.values(newDays).find((item) => item === week[day]);
        if (index) {
            delete newDays[day];
            setDays({...newDays});
            console.log(days);
        } else {
            setDays({
                ...days,
                [day]: week[day],
            });
        }
    };

    const showDays = () => {
        return Object.keys(week).map((day, key) => {
            return (
                <View key={key}>
                    <Button
                        onPress={() => selectDay(day)}
                        style={Object.keys(days).find((item) => item === day) ? styles.dayButtonActive : styles.dayButton}>
                        <Text>{week[day]}</Text>
                    </Button>
                </View>
            );
        });
    };

    return (
        <View style={styles.appContainer}>
            <TitleBar
                backButton={true}
                backNav="Schedule"
                navigation={navigation}
                title={device?.device_name?.toUpperCase()}
                subTitle={false}
                drawer={false}
            />
            <View
                style={{
                    ...styles.formBox,
                    backgroundColor: 'transparent',
                    flex: 1,
                    borderRadius: 10,
                    marginTop: 0,
                    marginBottom: 50,
                }}>
                <Text
                    style={{
                        ...styles.h3,
                        fontWeight: '300',
                        fontSize: 22,
                        marginBottom: 20,
                    }}>
                    Recirculation Schedules
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
                        <Text style={styles.loginLabel}>Label:</Text>
                        <TextInput
                            onChangeText={(device_name) => setScheduleName(device_name)}
                            style={styles.loginInput}
                            autoCapitalize="none"
                            placeholder="Ex. 'Weekday Mornings'"
                            placeholderTextColor="#000000"
                            underlineColorAndroid="transparent"
                            keyboardAppearance="dark"
                        />
                    </View>
                </KeyboardAvoidingView>
                <Text
                    style={{
                        ...styles.h3,
                        width: '100%',
                        fontWeight: '500',
                        fontSize: 16,
                        marginTop: 20,
                    }}>
                    Start and End Time
                </Text>
                <View style={[styles.timeSchedule, Platform.OS !== 'android' ? overlayStyle.datePicker : null]}>
                    <TouchableOpacity style={styles.timeSelector} onPress={() => showTimeSelector('start')}>
                        <View style={styles.time}>
                            <Text style={{fontWeight: '400', fontSize: 12}}>{startTime}</Text>
                        </View>
                        <View style={styles.selectTime}>
                            <Text
                                style={{
                                    fontWeight: '300',
                                    fontSize: 16,
                                    marginRight: 10,
                                }}>
                                Select Start Time
                            </Text>
                            <Text>
                                <FontAwesome5Pro name={toggleStart ? 'chevron-up' : 'chevron-down'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.datePicker}>
                        {toggleStart && (
                            <DateTimePicker
                                value={time}
                                mode={'time'}
                                is24Hour={false}
                                minuteInterval={15}
                                display="spinner"
                                textColor="#000000"
                                onChange={(event, selectedDate) => selectStartTime(event, selectedDate)}
                            />
                        )}
                    </View>
                </View>
                <View style={[styles.timeSchedule, Platform.OS !== 'android' ? overlayStyle.datePicker : null]}>
                    <TouchableOpacity style={styles.timeSelector} onPress={() => showTimeSelector('end')}>
                        <View style={styles.time}>
                            <Text style={{fontWeight: '400', fontSize: 12}}>{endTime}</Text>
                        </View>
                        <View style={styles.selectTime}>
                            <Text
                                style={{
                                    fontWeight: '300',
                                    fontSize: 16,
                                    marginRight: 10,
                                }}>
                                Select End Time
                            </Text>
                            <Text>
                                <FontAwesome5Pro name={toggleEnd ? 'chevron-up' : 'chevron-down'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {toggleEnd && (
                        <View style={styles.datePicker}>
                            <DateTimePicker
                                value={durationTime}
                                mode={'time'}
                                is24Hour={false}
                                minuteInterval={15}
                                display="spinner"
                                textColor="#000000"
                                onChange={(event, selectedDate) => selectEndTime(event, selectedDate)}
                            />
                        </View>
                    )}
                </View>
                <View style={styles.scheduleDays}>{showDays()}</View>
                {(toggleEnd || toggleStart) && Platform.OS !== 'android' ? (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            setToggleStart(false);
                            setToggleEnd(false);
                        }}>
                        <View style={overlayStyle.overlay} />
                    </TouchableWithoutFeedback>
                ) : null}
            </View>

            <Button
                full
                transparent
                style={[
                    styles.itemWindow,
                    {
                        borderRadius: 0,
                        minHeight: 0,
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: 10,
                    },
                ]}
                onPress={() => saveSchedule()}>
                <Text
                    style={{
                        color: '#000000',
                        textAlign: 'right',
                        fontWeight: '500',
                        fontSize: 14,
                    }}>
                    Save
                </Text>
            </Button>
        </View>
    );
};

const overlayStyle = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: 1,
    },
    datePicker: {
        zIndex: 2,
    },
});

export default NewSchedule;
