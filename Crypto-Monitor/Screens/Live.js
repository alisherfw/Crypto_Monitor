import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import CoinsBox from "../Components/CoinsBox";

const Live = () => {

    const [isLoading, setLoading] = useState(true);
    const [coins, setCoins] = useState();

    useEffect(() => {

        const fetchPrices = async () => {
            // setLoading(true);
            try {
                const response = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD`)
                setCoins(response.data.coins);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
                // console.log("fetching prices...")
            }
        }

        fetchPrices();
        setInterval(() => fetchPrices(), 5000)

    }, [])

    return (
        <>
            <Header title="Trending" subtext="Crytocurrencies" />
            <View style={styles.container}>
                <View style={styles.tobBar}>
                    <Text style={styles.name}>
                        Name
                    </Text>
                    <View style={styles.prices}>

                        <View style={styles.priceDate}>
                            <Text style={styles.name}>
                                1h %
                            </Text>
                            <Text style={styles.name}>
                                1d %
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.name}>
                                Price
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {
                        !isLoading ? coins.map((item) => {
                            return <CoinsBox key={item.id}
                                name={item.name}
                                icon={item.icon}
                                price={item.price}
                                priceChange1d={item.priceChange1d}
                                priceChange1h={item.priceChange1h}
                                priceChange1w={item.priceChange1w}
                                rank={item.rank}
                                symbol={item.symbol}
                            />
                        }) : <Text style={{ color: "white" }}>Loading...</Text>
                    }
                    <Text style={{color: "white"}}>LoadMore</Text>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000119",
        padding: 0
    },
    tobBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    name: {
        color: "#999",
        marginLeft: 50
    },
    prices: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "75%",
        paddingRight: 15
    },
    priceDate: {
        width: 150,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default Live;