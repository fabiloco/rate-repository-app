import { FC, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Link, useLocation } from "react-router-native";
import Constants from "expo-constants";

import StyledText from "../../../shared/StyledText";

import theme from "../../../shared/theme";

interface AppBarTabProps {
    children: ReactNode;
    to: string;
};

const AppBarTab: FC<AppBarTabProps> = ({ children, to }) => {
    const { pathname } = useLocation();

    const active = pathname === to;

    const textStyles = [
        styles.text,
        active && styles.active,
    ];
    return(
        <Link to={to}>
            <StyledText fontWeight="bold" style={textStyles}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab  to="/">Repositories!</AppBarTab>
                <AppBarTab to="/test">Sign in</AppBarTab>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: "row",
        /*justifyContent: "space-evenly"*/
    },
    scroll: {
        paddingBottom: 12
    },
    text: {
        color: theme.appBar.secondary,
        paddingHorizontal: 12,
    },
    active: {
        color: theme.appBar.textPrimary,
    },
});

export default AppBar;