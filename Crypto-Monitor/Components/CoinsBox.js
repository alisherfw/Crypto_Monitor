import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CoinsBox = ({ name, icon, price, priceChange1d, priceChange1h, priceChange1w, rank, symbol }) => {

    let colorHour = priceChange1h < 0 ? "red" : "#90ee90";
    let colorDay = priceChange1d < 0 ? "red" : "#90ee90";

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageName}>
                    <Image source={{ uri: icon }} style={styles.icon} />
                    <View style={styles.nameBox}>
                        <Text style={styles.symbol}> {symbol} </Text>
                        <Text style={styles.name}> {name} </Text>
                    </View>
                </View>
                <View style={styles.priceBox}>
                    <Text style={{ color: "white" }}> ${price.toFixed(2)} </Text>
                    <Text style={{ color: colorHour }}> {priceChange1h}% </Text>
                    <Text style={{ color: colorDay }}> {priceChange1d}% </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    imageName: {
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        width: 30,
        height: 30
    },
    nameBox: {
        paddingLeft: 10
    },
    symbol: {
        color: "white",
        fontSize: 14
    },
    name: {
        left: 1,
        fontSize: 10,
        color: "#999"
    },
    priceBox: {
        width: "60%",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingTop: 5
    }
})

export default CoinsBox;