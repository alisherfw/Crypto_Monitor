import { View, Text, StyleSheet } from "react-native";
import Header from "../Components/Header";
import ShortPriceBox from "../Components/ShortPriceBox";
const Home = () => {
    return (
        <>
            <Header title="" subtext="Dashboard" />
            <View style={styles.container}>
                    <ShortPriceBox />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000119",
    }
});

export default Home;