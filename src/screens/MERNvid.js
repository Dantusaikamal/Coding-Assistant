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

export default class MERNvid extends React.Component {
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
          title="Front end Web UI Frameworks and Tools: Bootstrap 4"
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
          This course will give you an overview of client-side web UI
          frameworks, in particular Bootstrap 4. You will learn about grids and
          responsive design, Bootstrap CSS and JavaScript components. You will
          learn about CSS preprocessors, Less and Sass. You will also learn the
          basics of Node.js and NPM and task runners like Grunt and Gulp. At the
          end of this course, you will be able to a)Set up, design and style a
          web page using Bootstrap 4 and its components, b) Create a responsive
          web page design, and c) Make use of web tools to setup and manage web
          sites. This course also includes an honors track that enables you to
          work on your own project developing a website using Bootstrap 4.
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
