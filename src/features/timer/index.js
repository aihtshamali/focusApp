import { useKeepAwake } from "expo-keep-awake";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { CountDown } from "../../components/countDown";
import { RoundedButton } from "../../components/roundedButton";
import { colors, fontSizes, spacing } from "../../utils";
import { TimeSlots } from "./timeSlots";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake()
    const [isStarted, setIsStarted] = useState(false)
    const [progressBar, setProgressBar] = useState(1)
    const [minutes, setMinutes] = useState(1)
    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgressBar(1)
        onTimerEnd(focusSubject)
        reset()
    }
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgressBar}
                    onEnd={onEnd}
                />
                <View style={styles.focusContainer}>
                    <Text style={styles.title}>
                        Focusing on: 
                    </Text>
                    <Text style={styles.subject}>
                        '{focusSubject}'
                    </Text>
                </View>
            </View>
            <ProgressBar progress={progressBar} color={colors.orange} />
            <TimeSlots changeTime={(time) => setMinutes(time)} />
            <View style={styles.buttonWrapper}>
                <RoundedButton 
                    title={!isStarted ? "Start" : "Pause"} 
                    onPress={() => setIsStarted(!isStarted)} 
                    size={100}
                />
                <RoundedButton 
                    title={"Cancel"}
                    style={{borderColor: colors.orange}} 
                    onPress={clearSubject} 
                    size={80}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countDown: {
        flex: 0.4,
        justifyContent: 'center', 

    },
    buttonWrapper: {
        flex: 0.4,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    focusContainer:{
      justifyContent: 'center',
      alignItems: 'center',  
      paddingTop: spacing.md
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: "bold"
    },
    subject: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontStyle: 'italic',
    }
})