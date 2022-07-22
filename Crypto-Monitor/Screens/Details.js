import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../Components/Header";

const Details = (props) => {

    let id = props.route.params.id;
    let name = props.route.params.name;
    let icon = props.route.params.icon;

    return (
        <View style={styles.container}>
            <Header title="Global Avarage Prices of" subtext={name} image={icon} />
            <Text style={{ color: "#fff" }}>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000119"
    }
})

export default Details;