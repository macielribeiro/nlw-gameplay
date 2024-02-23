import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image} from 'react-native';

import { styles } from './styles';
import { Profile } from '../../componentes/Profile';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        
      </View>
    </View>
  );
}



