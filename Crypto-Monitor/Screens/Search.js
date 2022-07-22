import { StyleSheet, View, Text } from "react-native";
import Header from "../Components/Header";

const Search = (props) => {

    // console.log(props.route.params)

    let itemId = props.route.params.itemId;

    return(
        <View style={styles.container}>
            <Header title="Search" subtext="Results" />
            <Text style={{color: "#fff"}}>{itemId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000119"
    }
});

export default Search;