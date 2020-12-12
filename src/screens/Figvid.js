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

export default class Figvid extends React.Component {
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
          title="Your first Repository"
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
          Figma is a very powerful application that runs online. There are
          virtually no platform boundaries when it comes to using figma because
          you can design within a web browser or using their desktop application
          made for windows and macs. Figma is similar to Sketch and Adobe XD but
          is the more powerful of the three when it comes to team collaboration
          and responsive, fast paced design. This course will cover user
          interface designing using the powerful tools within Figma. In the
          first section, I'll cover the Figma interface and where you can find
          powerful tools like constraints to make your designs responsive, and
          components to build a library of design elements to use throughout
          your projects. I'll also go over real-time team collaboration and how
          you can use figma to work closely with others in the same project.
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
