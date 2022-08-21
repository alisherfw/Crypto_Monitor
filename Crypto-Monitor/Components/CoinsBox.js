import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';

const CoinsBox = ({ name, id, icon, price, priceChange1d, priceChange1h, 
    priceChange1w, rank, symbol, availableSupply, marketCap, priceBtc, totalSupply,
    twitterUrl, volume, websiteUrl, navigation }) => {

    let colorHour = priceChange1h < 0 ? "red" : "#90ee90";

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
            id: id,
            name: name,
            icon: icon,
            price: price,
            rank: rank,
            symbol: symbol,
            availableSupply: availableSupply,
            marketCap: marketCap,
            priceBtc: priceBtc,
            totalSupply: totalSupply,
            twitterUrl: twitterUrl,
            volume: volume,
            websiteUrl: websiteUrl,
            priceChange1h: priceChange1h,
            priceChange1d: priceChange1d,
            priceChange1w: priceChange1w
        })}>
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
                        {/* <Text style={[{ color: colorHour }, styles.price1h]}>
                            {
                            colorHour === "red" ? 
                                <Entypo name="triangle-down" size={15} color={colorHour} /> 
                                : <Entypo name="triangle-up" size={15} color={colorHour} />
                            }{priceChange1h}%
                        </Text> */}
                        <Text style={[{ color: colorHour }, styles.price1d]}> {
                            colorHour === "red" ?
                                <Entypo name="triangle-down" size={15} color={colorHour} />
                                : <Entypo name="triangle-up" size={15} color={colorHour} />
                        }{priceChange1h}% </Text>
                    </View>
                    <View>
                        <Text style={[{ color: "white" }, styles.price]}> ${price.toFixed(3)} </Text>
                    </View>
                </View>
            </View >
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
        // width: 150,
        marginLeft: 50,
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