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

export default class gitvid extends React.Component {
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
          This module gets you started using Git. It provides the foundation for
          the rest of the course. You will install Git and/or Sourcetree, create
          a local repository, create a commit, create a remote repository and
          push commits to a remote repository. You have the option of doing the
          hands-on labs using the Sourcetree graphical Git client and/or using a
          command line. Git is open source software originally created by Linus
          Torvalds. Git manages team files for large and small projects. This
          allows the team to continuously improve its product. It is used by
          most major technology companies, and is assumed knowledge for many
          modern programming and IT jobs.
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
