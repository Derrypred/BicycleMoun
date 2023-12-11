import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, ActivityIndicator, RefreshControl } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Setting2, Edit } from "iconsax-react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { fontType, colors } from '../../assets/theme';
import axios from 'axios';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategory]}
            onPress={() => setSelectedCategory(item.id)}
        >
            <FastImage
                style={styles.categoryImage}
                source={{
                    uri: item?.image,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getDataBlog = async () => {
        try {
            const response = await axios.get(
                'https://656bd06ee1e03bfd572dd83d.mockapi.io/blog',
            );
            setBlogData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            getDataBlog();
            setRefreshing(false);
        }, 1500);
    }, []);

    useFocusEffect(
        useCallback(() => {
            getDataBlog();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Pilih Kategori Sepeda</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Cari kategori..."
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />

            {loading ? (
                <ActivityIndicator size="large" color={colors.yellow} />
            ) : (
                <FlatList
                    data={blogData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            )}

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate("AddCategoryForm")}
            >
                <Edit color='black' variant="Linear" size={15} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'black',
    },
    headerText: {
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchInput: {
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        marginBottom: 16,
        borderRadius: 10,
    },
    categoryItem: {
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
    },
    categoryImage: {
        width: 150,
        height: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    categoryText: {
        fontSize: 16,
        color: 'white',
    },
    selectedCategory: {
        backgroundColor: 'black',
        borderColor: 'blue',
    },
    selectedCategoryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    selectedCategoryImage: {
        width: 350,
        height: 300,
        borderRadius: 1,
        marginBottom: 8,
    },
    selectedCategoryText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'grey',
    },
    floatingButton: {
        backgroundColor: 'yellow',
        padding: 13,
        position: 'absolute',
        bottom: 75,
        right: 5,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
});

export default App;
