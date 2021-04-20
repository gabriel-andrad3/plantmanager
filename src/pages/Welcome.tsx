import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button'

export function Welcome() {
    const [visible, setVisible] = useState(true);

    function handleVisibility() {
        setVisible(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image}/> 
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamos de lembrar você {'\n'}
                sempre que precisar.
            </Text>

            <Button title='>'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'   
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 40
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading
    },
    image: {
        width: 292,
        height: 284
    }
});