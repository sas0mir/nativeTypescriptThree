import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
interface ISettingsProps {
    
}

export default function Settings(props: ISettingsProps) {
    return (
        <View style={styles.homeContainer}>
            <Text>SETTINGS SCREEN</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#9d5ff1',
        padding: '5%'
    },
})
