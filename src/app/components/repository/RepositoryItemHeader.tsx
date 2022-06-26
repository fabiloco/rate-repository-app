import { Image, StyleSheet, View } from "react-native";
import StyledText from "../../../shared/StyledText";
import theme from "../../../shared/theme";

interface Props {
    id: string,
    fullName: string,
    description: string, 
    language: string,
    ownerAvatarUrl: string;
};

const RepositoryItemHeader = (props: Props) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
            </View>
            <View style={styles.content}>
                <StyledText fontWeight="bold" fontSize="subheading">{props.fullName}</StyledText>
                <StyledText color="secondary">{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 2
    },
    content: {
        flex: 1
    },
    language: {
        padding: 4,
        marginVertical: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4
    },
    imageContainer: {
        paddingRight: 10
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
});

export default RepositoryItemHeader;