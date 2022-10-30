import {StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";
import {useState} from "react";
import { Icon } from "@rneui/themed";

interface ISearchBarProps {
    onSearchTap: any,
    visible: boolean,
    onClose: any
}

function SearchBar(props: ISearchBarProps) {

    const [text, setText] = useState('');

    function searchPressHandler() {
        props.onSearchTap(text);
        setText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Icon name="ios-information-circle-outline" type="ionicon" color="white"/>
                <TextInput style={styles.textInput} placeholder='' value={text} onChangeText={(value) => setText(value)} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Search' onPress={searchPressHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={(e) => props.onClose()} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default SearchBar;
