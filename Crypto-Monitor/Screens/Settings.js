import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>
                Settings
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#28282B",
        alignItems: "center"
    }
});

export default Settings;