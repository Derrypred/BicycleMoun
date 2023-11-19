import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, _View } from 'react-native';
import { colors } from '../../assets/theme';

const FAQScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const faqData = [
        {
            question: 'Apa yang dimaksud dengan sepeda gunung?',
            answer: 'Sepeda gunung adalah jenis sepeda yang dirancang khusus untuk digunakan di medan berat dan off-road. Mereka biasanya memiliki cangkang ban kasar, suspensi, dan rantai gigi yang lebih rendah untuk mengatasi medan berbatu dan berlumpur.'
        },
        {
            question: 'Apa perbedaan antara sepeda gunung dan sepeda jalan raya?',
            answer: 'Sepeda gunung dirancang untuk medan berat dan off-road, sementara sepeda jalan raya dirancang untuk mengendarai permukaan jalan rata. Sepeda gunung memiliki ban bergerigi, suspensi, dan rangka yang kuat.'
        },
        {
            question: 'Bagaimana cara memilih ukuran sepeda gunung yang sesuai? ',
            answer: 'Untuk memilih ukuran sepeda gunung yang sesuai, perhatikan tinggi badan Anda. Pilih sepeda yang memiliki ukuran kerangka yang sesuai dengan tinggi badan Anda, sehingga Anda dapat mengendarainya dengan nyaman.'
        },
        {
            question: 'Bagaimana cara merawat sepeda gunung saya?',
            answer: 'Untuk merawat sepeda gunung Anda, pastikan untuk membersihkannya secara teratur, menjaga tekanan ban yang tepat, melumasi rantai, dan memeriksa semua komponen untuk kerusakan atau keausan.'
        },
        {
            question: 'Apakah aplikasi ini gratis?',
            answer: 'Ya, aplikasi ini gratis untuk diunduh dan digunakan. Namun, mungkin ada konten atau fitur premium yang memerlukan pembayaran tambahan.'
        },
        {
            question: 'Apa yang membedakan aplikasi ini dari sumber informasi online lainnya?',
            answer: 'Aplikasi ini menyediakan konten yang disesuaikan dengan pengalaman pengguna, termasuk panduan langkah-demi-langkah, video tutorial, dan fitur interaktif yang dirancang khusus untuk pembelajaran sepeda gunung.'
        },
        {
            question: 'Bagaimana kebijakan privasi dan keamanan informasi pengguna di aplikasi ini?',
            answer: 'Aplikasi ini menjalankan kebijakan privasi yang ketat untuk melindungi informasi pengguna. Semua data pribadi dienkripsi dan tidak dibagikan kepada pihak ketiga tanpa izin. Pengguna dapat merujuk ke kebijakan privasi untuk informasi lebih lanjut.'
        },
        {
            question: 'Bagaimana saya bisa berkontribusi atau memberikan umpan balik?',
            answer: 'Aplikasi ini menyediakan formulir umpan balik di dalam aplikasi atau melalui situs web resmi. Pengguna dapat memberikan umpan balik, merekomendasikan fitur baru, atau melaporkan bug untuk membantu pengembangan aplikasi lebih lanjut.'
        },
        {
            question: 'Apa saja topik yang dicakup oleh aplikasi ini?',
            answer: 'Aplikasi ini mencakup berbagai topik, termasuk teknik mengendarai sepeda gunung, persiapan perjalanan, perawatan sepeda, pemilihan perlengkapan, navigasi, dan keamanan saat berkendara di berbagai medan.'
        },
        {
            question: 'Apa itu aplikasi edukasi sepeda gunung?',
            answer: 'Aplikasi edukasi sepeda gunung adalah platform digital yang dirancang untuk memberikan informasi, panduan, dan pembelajaran seputar dunia sepeda gunung.'
        },
    ];

    return (
        <Animated.View style={styles.container}>
            <Animated.Text style={[styles.heading, { transform: [{ translateY: headerY }] }]}>
                <Text style={styles.heading}>Pertanyaan (FAQ)!</Text>
            </Animated.Text>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: 15,
                }}>
                {faqData.map((item, index) => (
                    <View key={index} style={styles.faqItem}>
                        <Text style={styles.question}>{item.question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
        </Animated.View>
    );
};
export default FAQScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.darkModeBlack(),
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red',
    },
    faqItem: {
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    answer: {
        fontSize: 16,
        color: 'grey',
    },
});
