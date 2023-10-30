import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FAQScreen = () => {
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
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Pertanyaan Umum (FAQ)</Text>
            {faqData.map((item, index) => (
                <View key={index} style={styles.faqItem}>
                    <Text style={styles.question}>{item.question}</Text>
                    <Text style={styles.answer}>{item.answer}</Text>
                </View>
            ))}
        </ScrollView>
    );
};
export default FAQScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black', // Menambahkan latar belakang hitam
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red', // Mengubah warna teks menjadi putih
    },
    faqItem: {
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Mengubah warna teks pertanyaan menjadi putih
    },
    answer: {
        fontSize: 16,
        color: 'grey', // Mengubah warna teks jawaban menjadi putih
    },
});
