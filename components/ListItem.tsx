import { View, Text, StyleSheet, Pressable } from "react-native";

interface IListItemProps {
    text: string,
    id: string,
    onDeleteItem: any
}

function ListItem(this: any, props: IListItemProps) {
    return (
        <View style={styles.listItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color: '#dddddd'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.listItemText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    listItemText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
})

export default ListItem;
