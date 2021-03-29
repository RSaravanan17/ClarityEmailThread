import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';

import Constants from 'expo-constants';
import Svg, { Line, Circle, Rect, Path } from 'react-native-svg';
import emailThread from './emailThread.json';
import { ScrollView } from 'react-native-gesture-handler';

const EMAILS = [emailThread]

const BaseEmail = ({ text, replies }) => {
  const renderItem = ({ item }) => <Reply text={item.text} replies={item.replies} />;
  const renderSingleItem = ({ item }) => <SingleReply text={item.text} replies={item.replies} />;

  const dispText = text;

  return (
    <ScrollView style={styles.base_item}>
      <Svg height="0" width="40"></Svg>
      <View style={styles.base_body}>
        <Text style={styles.paragraph}>{dispText}</Text>
      </View>
      {replies !== undefined ? (
        <SafeAreaView style={styles.reply_container}>
          <FlatList data={replies} renderItem={replies.length > 1 ? (renderItem) : (renderSingleItem)} keyExtractor={item => item.text} />
        </SafeAreaView>
      ) : (
        console.log("nothing")
      )
      }
    </ScrollView>
  );
}

const SingleReply = ({ text, replies }) => {
  const renderItem = ({ item }) => <Reply text={item.text} replies={item.replies} />;
  const renderSingleItem = ({ item }) => <SingleReply text={item.text} replies={item.replies} />;

  const dispText = text;

  return (
    <View style={styles.single_item}>
      <View style={styles.single_subsequent_item}>
        <Svg height="0" width="40"></Svg>
        <View style={styles.single_reply_item}>
          <View style={styles.reply_connector}>
            <Svg height="20" width="20">
              <Line x1="2" y1="0" x2="2" y2="20" stroke="green" strokeWidth="2" />
            </Svg>
          </View>
          <View style={styles.reply_body}>
            <Text style={styles.paragraph}>{dispText}</Text>
          </View>
        </View>
      </View>
      {replies !== undefined ? (
        <SafeAreaView style={styles.reply_container}>
          <FlatList data={replies} renderItem={replies.length > 1 ? (renderItem) : (renderSingleItem)} keyExtractor={item => item.text} />
        </SafeAreaView>
      ) : (
        console.log("nothing")
      )
      }
    </View>
  );
}

const Reply = ({ text, replies }) => {
  const renderItem = ({ item }) => <Reply text={item.text} replies={item.replies} />;
  const renderSingleItem = ({ item }) => <SingleReply text={item.text} replies={item.replies} />;

  const dispText = text;

  return (
    <View style={styles.multi_item}>
      <View style={styles.multi_reply_item}>
        <View style={styles.reply_connector}>
          <Svg height="20" width="40">
            <Line x1="0" y1="2" x2="30" y2="10" stroke="green" strokeWidth="2" />
          </Svg>
        </View>
        <View style={styles.reply_body}>
          <Text style={styles.paragraph}>{dispText}</Text>
        </View>
      </View>
      {replies !== undefined ? (
        <SafeAreaView style={styles.reply_container}>
          <FlatList data={replies} renderItem={replies.length > 1 ? (renderItem) : (renderSingleItem)} keyExtractor={item => item.text} />
        </SafeAreaView>
      ) : (
        console.log("nothing")
      )
      }
    </View>
  );
}

export default function EmailThread() {
  const renderItem = ({ item }) => <BaseEmail text={item.text} replies={item.replies} />;

  return (
    <SafeAreaView style={styles.base_container}>
      <FlatList horizontal={true} data={EMAILS} renderItem={renderItem} keyExtractor={item => item.text} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderStyle: "solid",
    borderLeftColor: "red",
    borderLeftWidth: 0,
    backgroundColor: 'white'
  },
  reply_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderStyle: "solid",
    borderLeftColor: "red",
    borderLeftWidth: 0
  },
  single_item: {
    padding: 0,
    marginLeft: 0,
    marginTop: 0,
    borderStyle: "solid",
    borderLeftColor: "purple",
    borderLeftWidth: 0
  },
  single_subsequent_item: {
    flexDirection: "row",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderStyle: "solid",
    borderLeftColor: "orange",
    borderLeftWidth: 0
  },
  multi_item: {
    padding: 0,
    marginLeft: 40,
    marginTop: 0,
    borderStyle: "solid",
    borderLeftColor: "green",
    borderLeftWidth: 2
  },
  base_item: {
    padding: 0,
    marginLeft: 0,
    marginTop: 0
  },
  single_reply_item: {
    flexDirection: "column",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderStyle: "solid",
    borderLeftColor: "cyan",
    borderLeftWidth: 0
  },
  multi_reply_item: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderStyle: "solid",
    borderLeftColor: "orange",
    borderLeftWidth: 0
  },
  reply_connector: {
    padding: 0
  },
  base_body: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'azure'
  },
  reply_body: {
    flex: 1,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    borderStyle: "solid",
    borderLeftColor: "blue",
    borderLeftWidth: 0,
    backgroundColor: 'azure'
  },
  title: {
    fontSize: 24,
  },
  paragraph: {
    fontSize: 14,
  },
});