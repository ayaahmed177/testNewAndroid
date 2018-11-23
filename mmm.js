import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Item, Label, Input } from 'native-base';


@observer
export default class mmm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.conainerView}>
                <Text>
                    Aya
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
