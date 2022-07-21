import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import axios from "axios";
import NewsBox from "../Components/NewsBox";
import LiveLoading from "../Components/LiveLoading";
const baseURL = "https://api.coinstats.app/public/v1/news"
const News = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [showLimit, setShowLimit] = useState(20);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        fetchNews(0);
    }, [])

    const fetchNews = async (skip) => {
        try {
            if (!news.length) {
                setLoading(true);
            }
            const response = await axios.get(`${baseURL}/latest?skip=${skip}&limit=${showLimit}`)
            if (!news.length) {
                setNews(response.data.news);
            } else {
                setNews([...news, ...response.data.news]);
                setSkip(20);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }


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
                        }) : <LiveLoading />
                    }
                    {!isLoading && skip === 0 ? <View style={styles.pageControl}>
                        <TouchableOpacity onPress={() => fetchNews(20)}>
                            <Text style={{ color: "#ccc" }}> Load More </Text>
                        </TouchableOpacity>

                    </View> : null}
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
    },
    pageControl: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default News;