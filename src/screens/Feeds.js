import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import {Surface} from 'react-native-pa'

const data = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img2.jpg?alt=media&token=e8bd66c2-99bf-4c86-aa68-a23db085ead6',
    avatar: 'https://st2.depositphotos.com/3310833/7828/v/380/depositphotos_78289624-stock-illustration-flat-hipster-character.jpg',
    title: 'Harry Callum',
    caption: 'Lorem ipsum xyz desctiption',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img3.jpeg?alt=media&token=c8913562-88f7-4c57-ac42-085308ca73da',
    avatar: 'https://img2.pngio.com/rebecca-borland-commonvision-she-png-600_600.png',
    title: 'Evelyn Kyle',
    caption: 'Lorem ipsum xyz desctiption',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img6.jpeg?alt=media&token=1922b3fa-1000-4322-8cd9-f1eeb1f4f2e9',
    avatar: 'https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg',
    title: 'Thomas Joe',
    caption: 'Lorem ipsum xyz desctiption',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img4.jpg?alt=media&token=7fa378ee-245c-46c1-b251-14eb4ed77ae2',
    avatar: 'https://www.kindpng.com/picc/m/164-1649662_woman-icon-circle-png-transparent-png.png',
    title: 'Charlotte Rhys',
    caption: 'Lorem ipsum xyz desctiption',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img5.jpeg?alt=media&token=e9c608df-8f2a-45cc-9ccc-593eea781249',
    avatar: 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
    title: 'George Reece',
    caption: 'Lorem ipsum xyz desctiption',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/notifyme-79a2f.appspot.com/o/illus_img1.jpg?alt=media&token=f7f2876f-c9e9-49bd-a389-73568d2e3c17',
    avatar: 'https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-9.png',
    title: 'Emma Damian',
    caption: 'Lorem ipsum xyz desctiption',
  },
]

const tabIcons = [
  {ico1: 'user', ico2: 'user-o'},
  {ico1: "chatbox-ellipses", ico2: 'chatbox-ellipses-outline'},
  {ico1: "plus",},
  {ico1: 'like1',ico2: 'like2',},
  {ico1: "home", ico2: "home-outline"}
]

const RenderItem = ({ item }) => {
  return (
    <Surface style={styles.item}>
      <View style={styles.content}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
        <View style={{ position: 'absolute',
        top: 16, right: 0 }}>
          <Icons icon={icons.Entypo} name="dots-three-vertical" size={18} />
        </View>
      </View>
      <Image style={styles.image} source={{ uri: item.image }} resizeMode="cover" />
      <View style={styles.bottomView}>
        <View style={styles.icon}>
          <Icons icon={icons.AntDesign} name="heart" color={Colors.primary} />
        </View>
        <View style={styles.icon}>
          <Icons icon={icons.Ionicons} name="chatbubble-outline" />
        </View>
        <View style={styles.icon}>
          <Icons icon={icons.Feather} name="send" />
        </View>
      </View>
    </Surface>
  )
}

const Feeds = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

export default Feeds

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  item: {
    margin: 10,
    elevation: 6,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  caption: {
    color: Colors.darkGray,
  },
  image: {
    height: 300,
    width: null,
    marginBottom: 1,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  bottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 8,
  },
  textContainer: {
    marginHorizontal: 16,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginHorizontal: 10,
  },
})
