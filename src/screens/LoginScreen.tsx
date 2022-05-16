import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {wp, hp, statusBarHeight, fontSize} from '../helper/Helper';
import Colors from '../components/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {vectorIcons} from '../components/VectorIcons';

interface props {
  navigation: any;
}
const LoginScreen: React.FC<props> = ({navigation}) => {
  return (
    // main container
    <View>
      {/* background */}
      <View style={styles.background}>
        <View style={styles.backgroundBox} />
        <View style={styles.backgroundTriangle} />
      </View>
      {/* title and others...... */}
      <View style={styles.datawrapper}>
        {/* Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.titleSubText}>Login to access your account</Text>
        </View>
        {/* Login Wrapper */}

        <View style={styles.loginWrapper}>
          <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.emailText}>Email address</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <View style={styles.passwordTextWrapper}>
              <Text style={styles.passwordText}>Password</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry
            />
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.otherLoginMediaWrapper}>
              <TouchableOpacity>
                {vectorIcons(
                  'Entypo',
                  'facebook-with-circle',
                  40,
                  Colors.facebook,
                )}
              </TouchableOpacity>

              <TouchableOpacity style={{marginHorizontal: wp('2%')}}>
                {vectorIcons('EvilIcons', 'sc-google-plus', 40, Colors.google)}
              </TouchableOpacity>
              <TouchableOpacity>
                {vectorIcons(
                  'Entypo',
                  'twitter-with-circle',
                  40,
                  Colors.twitter,
                )}
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.donotHaveAccountWrapper}>
          <Text style={styles.donotHaveAccountText}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: Colors.backgroundLight,
  },
  backgroundBox: {
    width: wp('100%'),
    height: hp('35%'),
    backgroundColor: Colors.backgroundDark,
  },
  backgroundTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: wp('100%'),
    borderTopWidth: hp('15%'),
    borderLeftColor: 'transparent',
    borderTopColor: Colors.backgroundDark,
  },
  datawrapper: {
    position: 'absolute',
  },
  titleWrapper: {
    marginTop: statusBarHeight + hp('8%'),
    marginHorizontal: wp('8%'),
  },
  welcomeText: {
    color: Colors.textWhite,
    fontSize: fontSize(35),
    fontFamily: 'Play-Bold',
  },
  titleSubText: {
    color: Colors.textWhite,
    fontFamily: 'Play-Bold',
    fontSize: fontSize(15),
    marginTop: hp('1.5%'),
  },
  loginWrapper: {
    backgroundColor: Colors.backgroundWhite,
    height: hp('60%'),
    width: wp('86%'),
    borderRadius: 30,
    marginHorizontal: wp('7%'),
    marginTop: hp('4%'),
    paddingVertical: hp('9%'),
    paddingHorizontal: wp('7%'),
  },
  emailText: {
    fontFamily: 'Play-Bold',
    fontSize: fontSize(18),
    color: Colors.textGray,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
    paddingTop: hp('1.5%'),
    paddingBottom: hp('0.5%'),
    color: Colors.textGreen,
    fontFamily: 'Play-Bold',
    fontSize: fontSize(16),
  },
  passwordTextWrapper: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordText: {
    fontFamily: 'Play-Bold',
    fontSize: fontSize(18),
    color: Colors.textGray,
  },
  forgotText: {
    fontFamily: 'Play-Bold',
    fontSize: fontSize(15),
    color: Colors.textLightGreen,
  },
  signInButton: {
    backgroundColor: Colors.backgroundDark,
    marginHorizontal: wp('6%'),
    paddingVertical: hp('2.1%'),
    borderRadius: 30,
    marginTop: hp('5%'),
  },
  signInText: {
    color: Colors.textWhite,
    textAlign: 'center',
    fontSize: fontSize(18),
    fontFamily: 'Play-Bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: hp('2.5%'),
    fontFamily: 'Play-Bold',
    color: Colors.textGray,
    fontSize: fontSize(18),
  },
  otherLoginMediaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donotHaveAccountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('3%'),
  },
  donotHaveAccountText: {
    color: Colors.textWhite,
    fontSize: fontSize(15),
    fontFamily: 'Play-Bold',
  },
  signUpText: {
    marginLeft: wp('1%'),
    color: Colors.textGreen,
    fontSize: fontSize(15),
    fontFamily: 'Play-Bold',
  },
});
export default LoginScreen;
