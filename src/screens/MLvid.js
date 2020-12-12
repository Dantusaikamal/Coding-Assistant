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

export default class MLvid extends React.Component {
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
          Machine learning is the science of getting computers to act without
          being explicitly programmed. In the past decade, machine learning has
          given us self-driving cars, practical speech recognition, effective
          web search, and a vastly improved understanding of the human genome.
          Machine learning is so pervasive today that you probably use it dozens
          of times a day without knowing it. Many researchers also think it is
          the best way to make progress towards human-level AI. In this class,
          you will learn about the most effective machine learning techniques,
          and gain practice implementing them and getting them to work for
          yourself. More importantly, you'll learn about not only the
          theoretical underpinnings of learning, but also gain the practical
          know-how needed to quickly and powerfully apply these techniques to
          new problems. Finally, you'll learn about some of Silicon Valley's
          best practices in innovation as it pertains to machine learning and
          AI. This course provides a broad introduction to machine learning,
          datamining, and statistical pattern recognition.
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
