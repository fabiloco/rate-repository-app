import { View } from "react-native";

import RepositoryList from "./components/repository/RepositoryList";
import AppBar from "./components/appbar/Appbar";

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;