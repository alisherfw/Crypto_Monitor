import { View, Text, StyleSheet } from "react-native";

const Live = () => {
    return (
        <View style={styles.container}>
            <Text>
                Live
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#28282B",
        alignItems: "center",
    }
});

export default Live;