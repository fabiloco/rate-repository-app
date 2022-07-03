import { Text, View } from "react-native";

import { Route, Routes } from "react-router-native";

import RepositoryList from "./components/repository/RepositoryList";
import AppBar from "./components/appbar/Appbar";

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <Routes>
                <Route
                    path="/"
                    element={<RepositoryList />}
                />
                <Route
                    path="/test"
                    element={<Text>Hello</Text>}
                />
            </Routes>
        </View>
    );
};

export default Main;