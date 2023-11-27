import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { Setting2, Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const categoriesData = [
    { id: '1', name: 'Sepeda Gunung All Mountain', image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/KM949PDzV1.jpg' },
    { id: '2', name: 'Sepeda Gunung Freeride', image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/p2lKg3oSY9.jpg' },
    { id: '3', name: 'Sepeda Gunung Downhill', image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/rbJZR3kHHt.jpg' },
    { id: '4', name: 'Sepeda Gunung Cross Country', image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/MOZsDjqhuL.jpg' },
    { id: '5', name: 'United Radiant XCP', image: 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/cmiYKFctWg.jpg' },
    // Tambahkan kategori sepeda lainnya sesuai kebutuhan
];

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

    const filteredCategories = categoriesData.filter(category =>
        category.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategory]}
            onPress={() => setSelectedCategory(item.id)}
        >
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
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
            <FlatList
                data={filteredCategories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            {selectedCategory && (
                <View style={styles.selectedCategoryContainer}>
                    <Image source={{ uri: categoriesData.find(category => category.id === selectedCategory)?.image }} style={styles.selectedCategoryImage} />
                    <Text style={styles.selectedCategoryText}>Anda memilih: {categoriesData.find(category => category.id === selectedCategory)?.name}</Text>
                </View>
            )}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate("AddCategory")}
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
        backgroundColor: 'white',
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
        borderRadius: 50,
        marginBottom: 8,
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
        width: 150,
        height: 100,
        borderRadius: 1,
        marginBottom: 8,
    },
    selectedCategoryText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'grey',
    },
    floatingButton: {
        backgroundColor: 'yellow',
        padding: 13,
        position: 'absolute',
        bottom: 35,
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
