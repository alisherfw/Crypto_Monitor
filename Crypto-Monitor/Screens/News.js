import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import axios from "axios";
import NewsBox from "../Components/NewsBox";
const baseURL = "https://api.coinstats.app/public/v1/news"
const News = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [showLimit, setShowLimit] = useState(20);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseURL}/latest?skip=0&limit=${showLimit}`)
                setNews(response.data.news);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();

    }, [])



    return (
        <>

            <Header title="Today's" subtext="Crypto News" />
            <View style={styles.container}>
                <ScrollView>
                    {
                        !isLoading ? news.map((item) => {
                            return <NewsBox key={item.id}
                                title={item.title}
                                description={item.description}
                                feedDate={item.feedDate}
                                imgURL={item.imgURL}
                                link={item.link}
                                source={item.source}
                                coins={item.coins}
                            />
                        }) : <Text style={{ color: "white" }}> Loading... </Text>

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
        padding: 10
    }
});

export default News;