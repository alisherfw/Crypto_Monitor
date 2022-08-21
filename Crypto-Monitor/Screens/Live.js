import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import CoinsBox from "../Components/CoinsBox";
import LiveLoading from "../Components/LiveLoading";
import { Feather } from "@expo/vector-icons";
const baseURL = "https://api.coinstats.app/public/v1/coins";

const Live = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [coins, setCoins] = useState();
    const [skip, setSkip] = useState(0);
    const [fiat, setFiat] = useState("USD");
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchPrices = async () => {
            try {
                const response = await axios.get(`${baseURL}?skip=${skip}&currency=${fiat}`)
                setCoins(response.data.coins);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }

        fetchPrices();
        
        setInterval(() => fetchPrices(), 5000)

    }, [])

    // console.log(coins)

    return (
        <>
            <Header title="Trending" subtext="Crytocurrencies" />
            <View style={{ backgroundColor: "#000119", padding: 10, paddingTop: 0 }}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        placeholderTextColor={"#999"}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Search', {itemId: 20})}>
                        <Feather name="search" size={24} color="#999" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.tobBar}>
                    <Text style={styles.name}>
                        Name
                    </Text>
                    <View style={styles.prices}>

                        <View style={styles.priceDate}>
                            <Text style={[styles.day, { marginLeft: 110 }]}>
                                1h %
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.name}>
                                Avg. Price
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
                                id={item.id}
                                availableSupply={item.availableSupply}
                                marketCap={item.marketCap}
                                priceBtc={item.priceBtc}
                                totalSupply={item.totalSupply}
                                twitterUrl={item.twitterUrl}
                                volume={item.volume}
                                websiteUrl={item.websiteUrl}
                                navigation={navigation}
                            />
                        }) : <LiveLoading />
                    }
                    {/* { !isLoading ? <Text style={{color: "white"}}>LoadMore</Text> : null } */}
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
    searchContainer: {
        backgroundColor: "#000119",
        display: "flex",
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "#555",
        padding: 10,
        borderRadius: 10
    },
    searchBar: {
        width: "90%",
        marginLeft: 10,
        color: "#fff"
    },
    name: {
        color: "#999",
        marginLeft: 50
    },
    day: {
        color: "#999",
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