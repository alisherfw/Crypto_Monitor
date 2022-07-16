import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NewsBox = ({ title, description, feedDate, imgURL, link, source, coins }) => {
    // console.log(data);
    // const news = 

    let epochDate = new Date(feedDate);
    let date = epochDate.toLocaleString();

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={{ uri: imgURL }} style={styles.image} />
                </View>
                <View style={styles.right}>
                    <Text numberOfLines={3} style={styles.title}>
                        {title}
                    </Text>
                    <View style={styles.bottom}>
                        <Text style={styles.date}>
                            {date}
                        </Text>
                        <Text style={styles.date}>
                            {source} {'\u00A9'}
                        </Text>
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
        borderRadius: 5,
        marginBottom: 10,
        padding: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    right: {
        width: "70%",
        marginLeft: 15
    },
    title: {
        color: "white",
        flexWrap: "wrap",
        marginTop: 10,
        fontSize: 15,
        fontFamily: "sans-serif"
    },
    bottom: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    date: {
        fontSize: 9,
        color: "white",
        opacity: 0.5
    }
});

export default NewsBox;