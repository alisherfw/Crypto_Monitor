import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
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

    let id = props.route.params.id;
    let name = props.route.params.name;
    let icon = props.route.params.icon;

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

                setData(priceChart.filter(function (value, index, Arr) {
                    if (period === "24h") {
                        return index % 1 === 0;
                    } else if (period === "1w") {
                        return index % 1 === 0;
                    } else if (period === "1m") {
                        return index % 1 === 0;
                    } else if (period === "1y") {
                        return index % 1 === 0;
                    }
                }))

                let temp = dateChart.filter(function (index) {
                    if (period === "24h") {
                        return index % 29 === 0;
                    } else if (period === "1w") {
                        return index % 23 === 0;
                    } else if (period === "1m") {
                        return index % 7 === 0;
                    } else if (period === "1y") {
                        return index % 29 === 0;
                    }
                })

                temp.map(item => {
                    // setLabel([]);
                    let epochDate = new Date(item * 1000);
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
                    if (period === "24h") {
                        setLabel(oldLabel => [epochDate.getHours() + ":00", ...oldLabel])
                    } else if (period === "1w") {
                        setLabel(oldLabel => [weekNames[epochDate.getDay()], ...oldLabel]);
                    } else if (period === "1m") {
                        setLabel(oldLabel => [epochDate.getDate() + " " + monthNames[epochDate.getMonth()], ...oldLabel]);
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

    function labels() {

    }

    labels();

    return (
        <View style={styles.container}>
            <Header title="Global Avarage Prices of" subtext={name} image={icon} />
            {
                !isLoading ? <View>
                    <View style={styles.timeController}>
                        <TouchableOpacity onPress={() => setPeriod("24h")}>
                            <Text style={{ color: "#999" }}> 24h | </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPeriod("1w")}>
                            <Text style={{ color: "#999" }}> 1w |</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPeriod("1m")}>
                            <Text style={{ color: "#999" }}> 1m |</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPeriod("1y")}>
                            <Text style={{ color: "#999" }}> 1y |</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
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
                            withInnerLines={false}
                            // fromZero={true}
                            yAxisInterval={2} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "#000119",
                                backgroundGradientTo: "#000119",
                                decimalPlaces: 1, // optional, defaults to 2dp
                                color: () => `rgba(144, 238, 144)`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 5
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "1",
                                    stroke: "#90ee90"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 20,
                                borderRadius: 5
                            }}
                        />
                    </View>
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
        flexDirection: "row-reverse",
        marginHorizontal: 20
    }
})

export default Details;