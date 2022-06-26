import { StyleSheet, View } from "react-native";
import StyledText from "../../../shared/StyledText";

import Constants from "expo-constants";

import theme from "../../../shared/theme";

const AppBar = () => {
    return(
        <View style={styles.container}>
            <StyledText fontWeight="bold" style={styles.text}>
                Repositories
            </StyledText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
    },
});

export default AppBar;