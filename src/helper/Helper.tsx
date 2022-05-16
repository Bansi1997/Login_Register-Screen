import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const fontSize = (val: number) => RFValue(val, 812);

//Height and Width with Pixel
export const wp = (val: any) => widthPercentageToDP(val);
export const hp = (val: any) => heightPercentageToDP(val);

//Status bar heigth
export const statusBarHeight = getStatusBarHeight();
