import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import ListItem from "../components/ListItem";
import SearchBar from "../components/SearchBar";
import {IListItem} from "../constants";

export default function Home() {

    const initialListData: IListItem[] = [];

    const [todosList, setTodosList] = useState(initialListData);
    const [showSearchModal, setShowSearchModal] = useState(false);

    function showSearchTapHandler() {
        setShowSearchModal(!showSearchModal);
    }

    function addTodoHandler(value: string) {
        setTodosList((currentTodosList: IListItem[]) => [
            ...currentTodosList,
            {text: value, id: Math.random().toString()}
        ]);
        showSearchTapHandler();
    }

    function deleteTodoHandler(id: string) {
        setTodosList((currentTodosList) => {
            return currentTodosList.filter((todo) => todo.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <Button title="?" color="#a065ec" onPress={showSearchTapHandler} />
            <SearchBar onSearchTap={addTodoHandler} visible={showSearchModal} onClose={showSearchTapHandler} />
            <View style={styles.listContainer}>
                <FlatList data={todosList} renderItem={(itemData) => {
                    return <ListItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteTodoHandler} />
                }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
                    return item.id
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a'
    },
    listContainer: {
        flex: 4,
    },
});
