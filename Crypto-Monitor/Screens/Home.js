import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#28282B",
    }
});

export default Home;