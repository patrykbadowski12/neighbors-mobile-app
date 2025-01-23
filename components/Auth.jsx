import {
    GoogleSignin,
    statusCodes,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { View } from 'react-native';
import { GOOGLE_WEB_CLIENT_ID } from "@env";

export default function Auth() {
    GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true
    })

    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <GoogleSigninButton onPress={signin}/>
        </View>
    )
};