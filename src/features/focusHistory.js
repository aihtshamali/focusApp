import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors, fontSizes, padding } from "../utils";

export const FocusHistory = ({history}) => {
    if (!history || !history.length) return null

    const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
    return (
        <View>
            <Text style={styles.title}> Things we've focused on: </Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    item: {
        color: colors.white,
        fontSize: fontSizes.md,
        padding: 10
    },
    title: {
        fontSize: fontSizes.md,
        color: colors.white,
        fontWeight: 'bold',
        padding: 10
    }
})