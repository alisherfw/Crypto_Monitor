import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header";

const Settings = () => {
    return (
        <>
        <Header title="" subtext="Settings" />
        <View style={styles.container}>
            <Text>
                Settings
            </Text>
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000119",
        alignItems: "center"
    }
});

export default Settings;