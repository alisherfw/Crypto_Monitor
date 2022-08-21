import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import Header from "../Components/Header";
import LiveLoading from "../Components/LiveLoading";
import { LineChart } from "react-native-chart-kit";

const baseURL = "https://api.coinstats.app/public/v1/charts"

const Details = (props) => {

    const [isLoading, setLoading] = useState(true);
    const priceChart = [];
    const dateChart = [];
    const [data, setData] = useState();
    const [label, setLabel] = useState([]);
    const [period, setPeriod] = useState("24h");
    const [chartColor, setChartColor] = useState(`rgba(144, 238, 144)`);

    let id = props.route.params.id;
    let name = props.route.params.name;
    let icon = props.route.params.icon;
    let price = parseFloat(props.route.params.price).toFixed(3);
    let rank = props.route.params.rank;
    let symbol = props.route.params.symbol;
    let availableSupply = props.route.params.availableSupply;
    let marketCap = props.route.params.marketCap;
    let priceBtc = parseFloat(props.route.params.priceBtc).toFixed(3);
    let totalSupply = props.route.params.totalSupply;
    let twitterUrl = props.route.params.twitterUrl;
    let volume = props.route.params.volume;
    let websiteUrl = props.route.params.websiteUrl;
    let priceChange1h = props.route.params.priceChange1h;
    let priceChange1d = props.route.params.priceChange1d;
    let priceChange1w = props.route.params.priceChange1w;

    let subPrice = (price % 1) * 1000;


    useEffect(() => {
        const fetchChart = async () => {
            setLabel([]);
            setLoading(true);
            try {
                const response = await axios.get(`${baseURL}?period=${period}&coinId=${id}`);
                response.data.chart.map(item => {
                    priceChart.push(item[1]);
                    dateChart.unshift(item[0]);
                })

                let oldestPrice = priceChart[0];
                let newestPrice = priceChart[priceChart.length - 1];

                if (newestPrice < oldestPrice) {
                    setChartColor(`rgba(255, 0, 0)`);
                } else if (newestPrice >= oldestPrice) {
                    setChartColor(`rgba(144, 238, 144)`);
                }

                setData(priceChart);

                let temp = dateChart.filter(function (index) {
                    if (period === "24h") {
                        return index % 37 === 0;
                    } else if (period === "1w") {
                        return index % 23 === 0;
                    } else if (period === "1m") {
                        return index % 7 === 0;
                    } else if (period === "3m") {
                        return index % 33 === 0;
                    } else if (period === "6m") {
                        return index % 23 === 0;
                    } else if (period === "1y") {
                        return index % 37 === 0;
                    }
                })

                temp.map(item => {
                    // setLabel([]);
                    let epochDate = new Date(item * 1000);
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                    if (period === "24h") {
                        setLabel(oldLabel => [epochDate.getHours() + ":00", ...oldLabel]);
                    } else if (period === "1w") {
                        setLabel(oldLabel => [weekNames[epochDate.getDay()], ...oldLabel]);
                    } else if (period === "1m") {
                        setLabel(oldLabel => [epochDate.getDate() + " " + monthNames[epochDate.getMonth()], ...oldLabel]);
                    } else if (period === "3m") {
                        setLabel(oldLabel => [epochDate.getDate() + "" + monthNames[epochDate.getMonth()], ...oldLabel]);
                    } else if (period === "6m") {
                        setLabel(oldLabel => [epochDate.getDate() + "" + monthNames[epochDate.getMonth()], ...oldLabel]);
                    } else if (period === "1y") {
                        setLabel(oldLabel => [monthNames[epochDate.getMonth()], ...oldLabel]);
                    }
                })
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchChart();

    }, [period])

    const intToString = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + " K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };


    return (
        <View style={styles.container}>
            <Header title="Global Avarage Prices of" subtext={name} image={icon} />
            {
                !isLoading ? <View>

                    <ScrollView>



                        <View style={styles.timeController}>
                            <TouchableOpacity onPress={() => setPeriod("24h")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '24h' ? '#90ee90' : '#000119',
                                    color: period === '24h' ? "#000119" : "white"
                                }]}> 24H </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPeriod("1w")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '1w' ? '#90ee90' : '#000119',
                                    color: period === '1w' ? "#000119" : "white"
                                }]}> 1W </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPeriod("1m")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '1m' ? '#90ee90' : '#000119',
                                    color: period === '1m' ? "#000119" : "white"
                                }]}> 1M </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPeriod("3m")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '3m' ? '#90ee90' : '#000119',
                                    color: period === '3m' ? "#000119" : "white"
                                }]}> 3M </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPeriod("6m")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '6m' ? '#90ee90' : '#000119', // #2F3143
                                    color: period === '6m' ? "#000119" : "white"
                                }]}> 6M </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPeriod("1y")}>
                                <Text style={[styles.timeGaps, {
                                    backgroundColor: period === '1y' ? '#90ee90' : '#000119',
                                    color: period === '1y' ? "#000119" : "white"
                                }]}> 1Y </Text>
                            </TouchableOpacity>
                        </View>


                        <LineChart
                            data={{
                                labels: label,
                                datasets: [
                                    {
                                        data: data
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 10} // from react-native
                            height={250}
                            yAxisLabel="$"
                            yAxisSuffix=""
                            withShadow={false}
                            withInnerLines={false}
                            // fromZero={true}
                            yAxisInterval={2} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "#000119",
                                backgroundGradientTo: "#000119",
                                decimalPlaces: 1, // optional, defaults to 2dp
                                color: () => chartColor,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    // borderRadius: 5
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "1",
                                    stroke: "#90ee90"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 10,
                                borderRadius: 5,
                                marginLeft: -10
                            }}
                        />
                        <View>
                            {/* <Text style={styles.price}>
                                ${parseInt(price)}.<Text style={{ fontSize: 15 }}>{parseInt(subPrice)}</Text>
                            </Text> */}



                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.type}>
                                        Price:
                                    </Text>
                                    <Text style={styles.type}>
                                        Price BTC:
                                    </Text>
                                    <Text style={styles.type}>
                                        Vol:
                                    </Text>
                                </View>
                                <View style={[styles.column, { alignItems: "flex-end" }]}>
                                    <Text style={styles.value}>
                                        ${price}
                                    </Text>
                                    <Text style={styles.value}>
                                        {priceBtc}
                                    </Text>
                                    <Text style={styles.value}>
                                        {intToString(volume)}
                                    </Text>
                                </View>


                                <View style={styles.column}>
                                    <Text style={styles.type}>
                                        Avail/S.:
                                    </Text>
                                    <Text style={styles.type}>
                                        Mkt Cap:
                                    </Text>
                                    <Text style={styles.type}>
                                        Total/S:
                                    </Text>
                                </View>
                                <View style={[styles.column, { alignItems: "flex-end" }]}>
                                    <Text style={styles.value}>
                                        {intToString(availableSupply)}
                                    </Text>
                                    <Text style={styles.value}>
                                        {intToString(marketCap)}
                                    </Text>
                                    <Text style={styles.value}>
                                        {intToString(totalSupply)}
                                    </Text>
                                </View>
                            </View>

                            <View style={[styles.row, {justifyContent: "space-between", paddingHorizontal: 25, marginTop: 20}]}>
                                <View style={styles.column}>
                                    <Text style={styles.type}>
                                        1h:
                                    </Text>
                                    <Text style={styles.type}>
                                        1d:
                                    </Text>
                                    <Text style={styles.type}>
                                        1w:
                                    </Text>
                                </View>
                                <View style={[styles.column, { alignItems: "flex-end" }]}>
                                    <Text style={styles.value}>
                                        {priceChange1h}%
                                    </Text>
                                    <Text style={styles.value}>
                                        {priceChange1d}%
                                    </Text>
                                    <Text style={styles.value}>
                                        {priceChange1w}%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>


                </View> : <LiveLoading />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000119"
    },
    timeController: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: 20
    },
    timeGaps: {
        color: 'white',
        padding: 5,
        fontSize: 14,
        // backgroundColor: 'pink',
        // marginRight: 5,
        // borderRadius: 5,
    },
    price: {
        fontSize: 25,
        color: "#fff",
        textAlign: "left",
        fontWeight: "bold",
        textAlign: 'center'
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        // backgroundColor: "#2F3143"
    },
    column: {
        marginLeft: 5
    },
    type: {
        color: "#ccc",
        fontSize: 14
    },
    value: {
        color: "white",
        fontSize: 14,
    },
    priceChangeContainer: {

    },
    priceChangeBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    priceChangeContent: {
        color: "white",
        fontSize: 14
    }
})

export default Details;