import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Profile = ({ onPassValue }) => {
    const [inputNama, setInputNama] = useState('');
    const [nama, setNama] = useState('Anonymous');
    const [inputUmur, setInputUmur] = useState(0);
    const [umur, setUmur] = useState(0);
    return (
        <View>
            <Text>Halo, nama saya {nama}!</Text>
            <Text>Umurku, {umur} tahun</Text>
            <Text>{inputUmur}</Text>
            <Button title='INCREMENT' onPress={() => setInputUmur(inputUmur + 1)} />
            <Button title='DECREMENT' onPress={() => setInputUmur(inputUmur - 1)} />
            <Button title='PASS VALUE' onPress={() => {setNama(inputNama);setUmur(inputUmur);onPassValue(inputNama, inputUmur);}} />
            <TextInput placeholder="Input your name here" onChangeText={(text) => setInputNama(text)} style={{ borderWidth: 1, padding: 5, marginTop: 10 }}/>
        </View>
    );
};

export default Profile;
