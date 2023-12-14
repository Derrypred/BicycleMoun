import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, RefreshControl, TextInput, searchText, FlatList } from 'react-native';
import { Edit, Setting2 } from 'iconsax-react-native';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../../assets/theme';
import firestore from '@react-native-firebase/firestore';
import { formatNumber } from '../../utils/formatNumber';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDate } from '../../utils/formatDate';
import ActionSheet from 'react-native-actions-sheet';
import { ItemVertical } from '../../components';

// const App = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [searchText, setSearchText] = useState('');
//     const navigation = useNavigation();
//     const [selectedCategoryData, setSelectedCategoryData] = useState(null); // Tambahkan state baru
//     const [loading, setLoading] = useState(true);
//     const [blogData, setBlogData] = useState([]);
//     const [refreshing, setRefreshing] = useState(false);
//     useEffect(() => {
//         const subscriber = firestore()
//             .collection('blog')
//             .onSnapshot(querySnapshot => {
//                 const blogs = [];
//                 querySnapshot.forEach(documentSnapshot => {
//                     blogs.push({
//                         ...documentSnapshot.data(),
//                         id: documentSnapshot.id,
//                     });
//                 });
//                 setBlogData(blogs);
//                 setLoading(false);
//             });
//         return () => subscriber();
//     }, []);

//     const onRefresh = useCallback(() => {
//         setRefreshing(true);
//         setTimeout(() => {
//             firestore()
//                 .collection('blog')
//                 .onSnapshot(querySnapshot => {
//                     const blogs = [];
//                     querySnapshot.forEach(documentSnapshot => {
//                         blogs.push({
//                             ...documentSnapshot.data(),
//                             id: documentSnapshot.id,
//                         });
//                     });
//                     setBlogData(blogs);
//                 });
//             setRefreshing(false);
//         }, 1500);
//     }, []);
//     // Callback untuk menangani hasil upload dari formulir addcategory
//     const handleCategoryUpload = (categoryData) => {
//         // Disini, Anda dapat memasukkan logika validasi atau transformasi data jika diperlukan
//         setSelectedCategoryData(categoryData);

//         // Setelah itu, tambahkan data baru ke blogData
//         setBlogData(prevBlogData => [...prevBlogData, categoryData]);
//     };
//     const renderItem = ({ item }) => (
//         <TouchableOpacity
//             style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategory]}
//             onPress={() => setSelectedCategory(item.id)}
//         >
//             <FastImage
//                 style={styles.categoryImage}
//                 source={{
//                     uri: item?.image,
//                     headers: { Authorization: 'someAuthToken' },
//                     priority: FastImage.priority.high,
//                 }}
//                 resizeMode={FastImage.resizeMode.cover}
//             />
//             <Text style={styles.categoryText}>{item.name}</Text>
//         </TouchableOpacity>
//     );
//     return (
//         <View style={styles.container}>
//             <Text style={styles.headerText}>Pilih Kategori Sepeda</Text>
//             <TextInput
//                 style={styles.searchInput}
//                 placeholder="Cari kategori..."
//                 value={searchText}
//                 onChangeText={text => setSearchText(text)}
//             />

//             {loading ? (
//                 <ActivityIndicator size="large" color={colors.yellow} />
//             ) : (
//                 <FlatList
//                     data={blogData}
//                     renderItem={renderItem} // Pastikan untuk mengaktifkan kembali renderItem jika diperlukan
//                     keyExtractor={(item) => item.id.toString()}
//                     refreshControl={
//                         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//                     }
//                 />
//             )}

//             <TouchableOpacity
//                 style={styles.floatingButton}
//                 onPress={() => navigation.navigate("AddCategoryForm", { onCategoryUpload: handleCategoryUpload })}
//             >
//                 <Edit color='black' variant="Linear" size={15} />
//             </TouchableOpacity>
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: 'black',
//     },
//     headerText: {
//         color: 'yellow',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     searchInput: {
//         backgroundColor: 'black',
//         width: '100%',
//         padding: 10,
//         marginBottom: 16,
//         borderRadius: 10,
//     },
//     categoryItem: {
//         alignItems: 'center',
//         padding: 10,
//         marginRight: 10,
//         borderWidth: 5,
//         borderColor: 'red',
//         borderRadius: 10,
//     },
//     categoryImage: {
//         width: 150,
//         height: 100,
//         borderRadius: 20,
//         marginBottom: 10,
//     },
//     categoryText: {
//         fontSize: 16,
//         color: 'white',
//     },
//     selectedCategory: {
//         backgroundColor: 'black',
//         borderColor: 'blue',
//     },
//     selectedCategoryContainer: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     selectedCategoryImage: {
//         width: 350,
//         height: 300,
//         borderRadius: 1,
//         marginBottom: 8,
//     },
//     selectedCategoryText: {
//         fontSize: 21,
//         fontWeight: 'bold',
//         color: 'grey',
//     },
//     floatingButton: {
//         backgroundColor: 'yellow',
//         padding: 13,
//         position: 'absolute',
//         bottom: 75,
//         right: 5,
//         borderRadius: 10,
//         shadowColor: 'red',
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 4.65,
//         elevation: 8,
//     },
// });

// export default App;


const Profile = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };
    useEffect(() => {
        const user = auth().currentUser;
        const fetchBlogData = () => {
            try {
                if (user) {
                    const userId = user.uid;
                    const blogCollection = firestore().collection('blog');
                    const query = blogCollection.where('authorId', '==', userId);
                    const unsubscribeBlog = query.onSnapshot(querySnapshot => {
                        const blogs = querySnapshot.docs.map(doc => ({
                            ...doc.data(),
                            id: doc.id,
                        }));
                        setBlogData(blogs);
                        setLoading(false);
                    });

                    return () => {
                        unsubscribeBlog();
                    };
                }
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        const fetchProfileData = () => {
            try {
                const user = auth().currentUser;
                if (user) {
                    const userId = user.uid;
                    const userRef = firestore().collection('users').doc(userId);

                    const unsubscribeProfile = userRef.onSnapshot(doc => {
                        if (doc.exists) {
                            const userData = doc.data();
                            setProfileData(userData);
                            fetchBlogData();
                        } else {
                            console.error('Dokumen pengguna tidak ditemukan.');
                        }
                    });

                    return () => {
                        unsubscribeProfile();
                    };
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchBlogData();
        fetchProfileData();
    }, []);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            firestore()
                .collection('blog')
                .onSnapshot(querySnapshot => {
                    const blogs = [];
                    querySnapshot.forEach(documentSnapshot => {
                        blogs.push({
                            ...documentSnapshot.data(),
                            id: documentSnapshot.id,
                        });
                    });
                    setBlogData(blogs);
                });
            setRefreshing(false);
        }, 1500);
    }, []);
    const handleLogout = async () => {
        try {
            closeActionSheet();
            await auth().signOut();
            await AsyncStorage.removeItem('userData');
            navigation.replace('Login');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={openActionSheet}>
                    <Setting2 color={colors.blue()} variant="Linear" size={24} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    gap: 10,
                    paddingVertical: 20,
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={{ gap: 15, alignItems: 'center' }}>
                    <FastImage
                        style={profile.pic}
                        source={{
                            uri: profileData?.photoUrl,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={{ gap: 5, alignItems: 'center' }}>
                        <Text style={profile.name}>{profileData?.fullName}</Text>
                        <Text style={profile.info}>
                            Member since {formatDate(profileData?.createdAt)}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, gap: 10 }}>
                    {loading ? (
                        <ActivityIndicator size={'large'} color={colors.blue()} />
                    ) : (
                        blogData.map((item, index) => <ItemVertical item={item} key={index} />)
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate('AddCategoryForm')}>
                <Edit color={colors.white()} variant="Linear" size={20} />
            </TouchableOpacity>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}
                indicatorStyle={{
                    width: 100,
                }}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={handleLogout}>
                    <Text
                        style={{
                            fontFamily: fontType['Pjs-Medium'],
                            color: colors.black(),
                            fontSize: 18,
                        }}>
                        Log out
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={closeActionSheet}>
                    <Text
                        style={{
                            fontFamily: fontType['Pjs-Medium'],
                            color: 'red',
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
        </View>
    );
};
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black(),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4,
    },
    title: {
        fontSize: 20,
        fontFamily: fontType['Pjs-ExtraBold'],
        color: colors.white(),
    },
    floatingButton: {
        backgroundColor: colors.blue(),
        padding: 15,
        position: 'absolute',
        bottom: 24,
        right: 24,
        borderRadius: 10,
        shadowColor: colors.blue(),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
});
const profile = StyleSheet.create({
    pic: { width: 100, height: 100, borderRadius: 15 },
    name: {
        color: colors.white(),
        fontSize: 20,
        fontFamily: fontType['Pjs-ExtraBold'],
        textTransform: 'capitalize',
    },
    info: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.grey(),
    },
    sum: {
        fontSize: 16,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.white(),
    },
    tag: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.grey(0.5),
    },
    buttonEdit: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: colors.grey(0.1),
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.white(),
    },
});