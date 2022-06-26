import { StyleSheet, View } from "react-native";
import StyledText from "../../../shared/StyledText";

interface Props { 
    forksCount: number,
    stargazersCount: number,
    ratingAverage: number,
    reviewCount: number,
};

const parseThousands = (value: number) => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}K`
        : String(value)
};

const RepositoryStats = (props: Props) => {
    return(
        <View style={styles.container}>
            <View>
                <StyledText fontWeight="bold" align="center">Forks</StyledText>
                <StyledText align="center">{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Rating</StyledText>
                <StyledText align="center">{props.ratingAverage}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Review</StyledText>
                <StyledText align="center">{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Stars</StyledText>
                <StyledText align="center">{parseThousands(props.stargazersCount)}</StyledText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default RepositoryStats;