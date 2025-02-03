import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Auth from '@/components/Auth';
export default function Index() {
  return (
    <ImageBackground source={require('../assets/images/neighbors.jpg')} style={styles.background} resizeMode='cover'>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Neighbors!</Text>
        <Text style={styles.subtitle}>Discover what's happening in your neighborhood. Connect, share, and build a stronger community together.</Text>
        <Auth/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 80,
    backgroundImage: ''
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#bdc3c7',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})