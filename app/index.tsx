import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  return (
    <ImageBackground source={require('../assets/images/neighbors.jpg')} style={styles.background} resizeMode='cover'>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Neighbors!</Text>
        <Text style={styles.subtitle}>Discover what's happening in your neighborhood. Connect, share, and build a stronger community together.</Text>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <FontAwesome name="google" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
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