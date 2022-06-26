import { FC } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "../../../shared/StyledText";
import theme from "../../../shared/theme";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats";

interface Repo {
    id: string,
    fullName: string,
    description: string, 
    language: string,
    forksCount: number,
    stargazersCount: number,
    ratingAverage: number,
    reviewCount: number,
    ownerAvatarUrl: string;
};

interface Props {
    repo: Repo;
};

const RepositoryItem: FC<Props> = ({ repo }) => {
    return(
        <View key={repo.id} style={styles.container} >
            <RepositoryItemHeader 
                description={repo.description}
                id={repo.id}
                fullName={repo.fullName}
                language={repo.language}
                ownerAvatarUrl={repo.ownerAvatarUrl}
            />
            <RepositoryStats 
                forksCount={repo.forksCount}
                ratingAverage={repo.ratingAverage}
                reviewCount={repo.reviewCount}
                stargazersCount={repo.stargazersCount}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
    },
});

export default RepositoryItem;