import { StyleSheet, View } from "react-native";
import {
    Placeholder,
    Loader
} from "rn-placeholder";

const LiveLoading = () => {

    return (
        <View style={styles.container}>
            <Placeholder
                Animation={Loader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "70%",
        padding: 10
    }
})


export default LiveLoading;