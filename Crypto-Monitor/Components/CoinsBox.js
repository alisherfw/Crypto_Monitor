import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';

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
                    <View style={styles.priceDate}>
                        <Text style={[{ color: colorHour }, styles.price1h]}>
                            {
                            colorHour === "red" ? 
                                <Entypo name="triangle-down" size={15} color={colorHour} /> 
                                : <Entypo name="triangle-up" size={15} color={colorHour} />
                            }{priceChange1h}%
                        </Text>
                        <Text style={[{ color: colorDay }, styles.price1d]}> {
                            colorDay === "red" ? 
                                <Entypo name="triangle-down" size={15} color={colorDay} /> 
                                : <Entypo name="triangle-up" size={15} color={colorDay} />
                            }{priceChange1d}% </Text>
                    </View>
                    <View>
                        <Text style={[{ color: "white" }, styles.price]}> ${price.toFixed(3)} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: "65%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5
    },
    priceDate: {
        width: 150,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price1h: {
        // width: 70
    },
    price1d: {
        // left: 25
    },
})

export default CoinsBox;