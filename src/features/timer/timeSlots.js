import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../../components/roundedButton";
import { spacing } from "../../utils";

const timeSlots = [5, 10, 15]


export const TimeSlots = ({changeTime}) => {
    return (
        <View style={styles.timeSlots }>
            {
                (timeSlots.map((slot) => (
                    <RoundedButton key={slot} onPress={() => changeTime(slot)} style={styles.roundedButton} title={slot} size={80} />
                )))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    roundedButton: {
        marginTop: spacing.xl
    },
    timeSlots: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
})