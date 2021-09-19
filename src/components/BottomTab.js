import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import Icons, { icons } from './Icons';

const tabIcons = [
  { ico1: "home", ico2: "home-outline", type: icons.Ionicons, routeName: 'Feeds' },
  { ico1: 'like1', ico2: 'like2', type: icons.AntDesign, routeName: '' },
  { ico1: "plus", ico2: "plus", type: icons.Entypo, routeName: '' },
  { ico1: "chatbox-ellipses", ico2: 'chatbox-ellipses-outline', type: icons.Ionicons, routeName: '' },
  { ico1: 'user', ico2: 'user-o', type: icons.FontAwesome, routeName: 'Profile' },
]

const BottomTab = ({navigation}) => {
  const [focused, setFocused] = useState('home');
  const navigate = (routeName) => 
    routeName !== '' ? navigation.navigate(routeName) : null;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFocused('home');
    })
    return () => unsubscribe;
  }, [navigation])
  return (
    <>
      {tabIcons.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setFocused(item.ico1);
              navigate(item.routeName)
            }}
            style={[index === 2 && styles.plusIconStyle]}>
            <Icons icon={item.type} name={focused === item.ico1 ? item.ico1 : item.ico2}
              color={index === 2 && Colors.white}
              size={index === 2 && 34}
            />
          </TouchableOpacity>
        ))}
    </>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  plusIconStyle: {
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
    borderWidth: 4,
    borderColor: Colors.white,
  },
})
