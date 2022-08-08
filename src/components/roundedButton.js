import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {colors} from '../utils/index'
export const RoundedButton = ({
    style = {},
    textStyle= {},
    size= 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]}
            onPress={props.onPress}
        >
            <Text style={[styles(size).text, textStyle]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius:size/2,
        width: size,
        height: size,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#fff",
    },
    text: {
         color: "#fff",
         fontSize: size/4
    }
})