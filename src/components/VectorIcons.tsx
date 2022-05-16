import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const vectorIcons = (
  iconType: string,
  iconName: string,
  iconSize: number,
  iconColor: string,
) => {
  switch (iconType) {
    case 'AntDesign':
      return <AntDesign name={iconName} size={iconSize} color={iconColor} />;
    case 'Entypo':
      return <Entypo name={iconName} size={iconSize} color={iconColor} />;
    case 'EvilIcons':
      return <EvilIcons name={iconName} size={iconSize} color={iconColor} />;
    case 'Feather':
      return <Feather name={iconName} size={iconSize} color={iconColor} />;
    case 'FontAwesome':
      return <FontAwesome name={iconName} size={iconSize} color={iconColor} />;
    case 'FontAwesome_5':
      return <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />;
    case 'Fontisto':
      return <Fontisto name={iconName} size={iconSize} color={iconColor} />;
    case 'Foundation':
      return <Foundation name={iconName} size={iconSize} color={iconColor} />;
    case 'Ionicons':
      return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
    case 'MaterialIcons':
      return (
        <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      );
    case 'Octicons':
      return <Octicons name={iconName} size={iconSize} color={iconColor} />;
    case 'Zocial':
      return <Zocial name={iconName} size={iconSize} color={iconColor} />;
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons name={iconName} size={iconSize} color={iconColor} />
      );
    default:
      return;
  }
};
