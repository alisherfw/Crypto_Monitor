import { StyleSheet, View, Text, Image } from "react-native";

const Header = ({ title, subtext, image }) => {
    return (
        <View style={styles.container}>
            <View>
                { title ? <Text style={styles.title}>{title}</Text> : null }
            </View>
            <View style={{marginRight: 10, display: "flex", flexDirection: "row", alignItems: "center"}}>
                { image ? <Image source={{ uri: image }} style={{width: 30, height: 30, marginRight: 10}} /> : null }
                { subtext ? <Text style={styles.subtext}>{subtext}</Text> : null }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000119",
        padding: 10,
        paddingTop: 40
    },
    title: {
        color: "white",
        fontSize: 24,
        fontFamily: "sans-serif-medium"
    },
    subtext: {
        color: "white",
        fontSize: 32,
        fontFamily: "sans-serif-medium"
    }
});

export default Header;