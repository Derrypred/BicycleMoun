import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

const ContactUsScreen = () => {
    const email = "derryfrediansa@gmail.com"; // Ganti dengan alamat email Anda

    const openEmailApp = () => {
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hubungi Kami</Text>
            <Text style={styles.text}>Anda bisa menghubungi kami melalui email:</Text>
            <Button color={'grey'} title={`Email ke ${email}`} onPress={openEmailApp} />
        </View>
    );
};
export default ContactUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'red',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: 'yellow',
    },
});

