import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { colors, fontSizes, padding, spacing } from "../utils";

const formatTime = (time) => (time < 10 ? `0${time}` : time);
const minutesToMillis = (min) => min * 1000 * 60;

export const CountDown = ({
    minutes= 0.1,
    onProgress,
    isPaused,
    onEnd
}) => {
    const interval = React.useRef(null);
    const reset = () => setMillis(minutesToMillis(minutes))
    const [millis, setMillis] = useState(null);

    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                onEnd(reset);
                return time;
            }
            const timeLeft = time - 1000;
            return timeLeft;
        });
    };

    useEffect(() => {
        setMillis(minutesToMillis(minutes));
    }, [minutes]);

    useEffect(() => {
        onProgress(millis / minutesToMillis(minutes));
    }, [millis]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }

        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current);
    }, [isPaused]);

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

    return (
        <Card style={styles.card}>
            <Text style={styles.text}>
                {formatTime(minute)}:{formatTime(seconds)}
            </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: spacing.lg,
        borderRadius: 10,
        backgroundColor: "#3A5BA0" 
    },
    text: {
        textAlign: "center",
        fontSize: fontSizes.xxxl,
        color: colors.white,
        padding: spacing.md
    }
})