import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Study Planner
      </Text>

      <Text style={styles.subtitle}>
        Ayo atur waktu belajarmu
      </Text>

      <Text style={styles.sectionTitle}>
        Jadwal Hari Ini
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Belum ada jadwal
        </Text>

        <Text style={styles.cardText}>
          Tambahkan jadwal belajar pertamamu.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/tambah-jadwal')}
      >
        <Text style={styles.buttonText}>
          + Tambah Jadwal
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 16,
    marginTop: 6,
    color: '#666666',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 35,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 16,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
  },

  cardText: {
    marginTop: 5,
    color: '#666666',
  },

  button: {
    backgroundColor: '#222222',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
});