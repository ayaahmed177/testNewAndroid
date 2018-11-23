import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Item, Label, Input } from 'native-base';
import DeviceInfo from 'react-native-device-info';
import I18n from 'react-native-i18n';
import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings
} from "react-native-google-analytics-bridge";


@observer
export default class mmm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            batteryLevel: null
        };
    }
    componentWillMount() {
        DeviceInfo.getBatteryLevel().then(batteryLevel => {
            // 0.759999
            this.setState({ batteryLevel });
        });
    }

    render() {
        return (
            <View style={styles.conainerView}>
                <Text>
                    {'Aya \n'}
                    {'batteryLevel : ' + this.state.batteryLevel}
                </Text>
                <Item floatingLabel last>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item floatingLabel >
                    <Label>Password</Label>
                    <Input />
                </Item>
            </View>
        );
    }
}

const styles = {
    conainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
};
