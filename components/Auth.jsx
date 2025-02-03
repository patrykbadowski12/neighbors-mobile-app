import {
    GoogleSignin,
    statusCodes,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { View } from 'react-native';
import { GOOGLE_WEB_CLIENT_ID, BACKEND_API_URL } from "@env";
import { useNavigation } from '@react-navigation/native';

export default function Auth() {

    GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true, 
    });

    const navigation = useNavigation();

    const handleLogIn = async () => {
        try {
            const token = await signin();
            console.log('Token received: ' + token);
            if (token) {
                await getUserData(token);
                navigation.navigate('Dashboard');
            } else {
                console.error('Failed to retrieve token.');
            }
        } catch (error) {
            console.error('Error during login process:', error);
        }
    };
    
    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', userInfo);
            return userInfo.data.idToken;
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.error('Login was cancelled by the user.');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Login process is already in progress.');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.error('Google Play Services are unavailable or outdated.');
            } else {
                console.error('An unknown error occurred during login:', error);
            }
            return null;
        }
    };
    
    const getUserData = async (idToken) => {
        try {
            const endpoint = BACKEND_API_URL + '/api/v1/users/auth';
            console.log('Sending request to:', endpoint);
    
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${idToken}`,
                },
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                console.error('Backend responded with error:', errorResponse);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('User data from backend:', data);
            return data;
        } catch (error) {
            console.error('Error during POST request to backend:', error);
            throw error;
        }
    };    
    

    return (
        <View>
            <GoogleSigninButton onPress={handleLogIn} />
        </View>
    );
};
