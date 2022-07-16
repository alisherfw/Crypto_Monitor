import { StyleSheet, View, Text } from "react-native";

const Header = ({ title, subtext }) => {
    return (
        <View style={styles.container}>
            <View>
                { title ? <Text style={styles.title}>{title}</Text> : null }
            </View>
            <View style={{marginRight: 10}}>
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