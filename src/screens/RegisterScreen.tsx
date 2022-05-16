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
          <Text style={styles.welcomeText}>Register</Text>
          <Text style={styles.titleSubText}>Create a new account</Text>
        </View>
        {/* Login Wrapper */}

        <View style={styles.signUpWrapper}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <Text style={styles.labelText}>Email address</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
            />

            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry
            />
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry
            />
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.alreadyHaveAccountWrapper}>
          <Text style={styles.alreadyHaveAccountText}>
            Already have account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.signInText}>Sign in</Text>
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
    height: hp('34%'),
    backgroundColor: Colors.backgroundDark,
  },
  backgroundTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: wp('100%'),
    borderTopWidth: hp('15%'),
    borderRightColor: 'transparent',
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
  signUpWrapper: {
    backgroundColor: Colors.backgroundWhite,
    height: hp('60%'),
    width: wp('80%'),
    borderRadius: 30,
    marginHorizontal: wp('10%'),
    marginTop: hp('4%'),
    paddingVertical: hp('4%'),
    paddingHorizontal: wp('7%'),
  },
  labelText: {
    fontFamily: 'Play-Bold',
    fontSize: fontSize(18),
    color: Colors.textGray,
    marginTop: hp('3%'),
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

  signUpButton: {
    backgroundColor: Colors.backgroundDark,
    marginHorizontal: wp('6%'),
    paddingVertical: hp('2.1%'),
    borderRadius: 30,
    marginTop: hp('5%'),
  },
  signUpText: {
    color: Colors.textWhite,
    textAlign: 'center',
    fontSize: fontSize(18),
    fontFamily: 'Play-Bold',
  },

  alreadyHaveAccountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('3%'),
  },
  alreadyHaveAccountText: {
    color: Colors.textWhite,
    fontSize: fontSize(15),
    fontFamily: 'Play-Bold',
  },
  signInText: {
    marginLeft: wp('1%'),
    color: Colors.textGreen,
    fontSize: fontSize(15),
    fontFamily: 'Play-Bold',
  },
});
export default LoginScreen;
