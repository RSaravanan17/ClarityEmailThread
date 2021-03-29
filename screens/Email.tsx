import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Constants from 'expo-constants';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
// import emailThread from './emailThread.json';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

// const EMAILS = [emailThread]

export default function Email({ node }: { node: string }, { replies }: { replies: array }) {
    const renderItem = ({ item }) => <Item text={item.text} replies={item.replies} />;
  
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{text}</Text>
            <SafeAreaView style={styles.container}>
                <FlatList data={replies} renderItem={renderItem} keyExtractor={item => item.text} />
            </SafeAreaView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      borderStyle: "solid",
      borderColor: "red",
      borderWidth: 1
    },
    item: {
      padding: 0,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
    },
  });