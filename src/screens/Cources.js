import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'

export default class Cources extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../images/cat.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#8bbcdb"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#8bbcdb",
                        marginLeft:240
                    }}> 
                            <Image
                                source={require('../images/hum.png')}
                                style={{height:15,width:20}}
                            />
                    </View>
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
                    fontFamily:"Bold",
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:34
                    
                    }}>
                    Suggested Courses
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
                            <CourseList
                                onPress={()=>this.props.navigation.navigate("Xd")}
                                img={require('../images/xd.png')}
                                title="Adobe XD Prototyping"
                                bg="#fdddf3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Webdev")}                             
                                img={require('../images/coding.png')}
                                title="Web Development using HTML, CSS, JavaScript"
                                bg="#fef8e3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("MERN")}
                                img={require('../images/js.png')}
                                title="Master MERN stack by Sai Kamal"
                                bg="#fcf2ff"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("Fig")}
                                img={require('../images/f.png')}
                                title="Figma Essentials"
                                bg="#fff0ee"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("git")}
                                img={require('../images/git.png')}
                                title="Git Essentials"
                                bg="#fdddf3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("ML")}
                                img={require('../images/ml.png')}
                                title="Machine Learning using Python"
                                bg="#fef8e3"
                            />
                             <CourseList
                                onPress={()=>this.props.navigation.navigate("cloud")}
                                img={require('../images/cloud.png')}
                                title="Introduction to Cloud"
                                bg="#fcf2ff"
                            />
                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}