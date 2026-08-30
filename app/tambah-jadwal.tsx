import { View, Text, StyleSheet } from 'react-native';

export default function TambahJadwalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tambah Jadwal
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});