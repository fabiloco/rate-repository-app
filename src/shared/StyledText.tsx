import { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import theme  from "./theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: "400"
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    }, 
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    bold: {
        fontWeight: "bold",
    },
    textAlignCenter: {
        textAlign: "center",
    }
});

interface StyledTextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    style?: StyleProp<TextStyle>;
    align?: string;
    children?: React.ReactNode;
}

const StyledText: FC<StyledTextProps> = ({
    children,
    color,
    fontSize,
    fontWeight,
    style,
    align,
    ...restOfProps
}) => {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        align === "center" && styles.textAlignCenter,
        style
    ];

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
}

export default StyledText;