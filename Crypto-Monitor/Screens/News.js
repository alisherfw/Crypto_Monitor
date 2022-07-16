import { View, Text, StyleSheet } from "react-native";

const News = () => {
    return (
        <View style={styles.container}>
            <Text>
                News
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28282B",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default News;