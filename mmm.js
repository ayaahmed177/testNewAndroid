import React, { Component } from 'react';
import { View, Text } from 'react-native';


// @observer
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
