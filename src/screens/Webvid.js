import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
} from "react-native";
import { Video } from "expo-av";
import Chapters from "../screens/Chapters";

const { width, height } = Dimensions.get("window");

export default class Webvid extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#f58084" />
        <Video
          source={require("../videos/maintro.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          style={style.video}
        />
        <Chapters
          color="#fde6e6"
          percent={25}
          duration="2 hours, 20 minutes"
          title="Introduction"
          num={1}
        />

        <Text
          style={{
            fontFamily: "Medium",
            textAlign: "justify",
            color: "#345c74",
            paddingLeft: 42,
            paddingRight: 35,
          }}
        >
          In this module, we'll begin to explore how to design and create
          websites by exploring the base language used to power all websites:
          HTML. By the end of this lesson, you'll be able to: identify and use
          common HTML tags; add an image to a webpage; create HTML-formatted
          tables; use hyperlinks to connect a series of webpages; upload your
          finished HTML pages to a web host; and, learn some tips and tricks for
          styling pages and practicing your coding.
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            backgroundColor: "#f58084",
            marginHorizontal: 40,
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Bold",
              fontSize: 15,
              marginRight: 50,
            }}
          >
            Read more
          </Text>
          <Image source={require("../images/a3.png")} />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
