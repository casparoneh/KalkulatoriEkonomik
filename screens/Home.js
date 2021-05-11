import React, { useState } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../components/MainButton";
import MainText from "../components/MainText";
import Screen from "../components/Screen";

const Home = ({ navigation }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 5040,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const rotateInterPolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "-360deg"],
  });
  const animatedStyles = {
    transform: [{ rotate: rotateInterPolate }],
  };

  return (
    <ScrollView>
      <Screen>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MainText>KALKULATORI</MainText>
          <MainText>EKONOMIK</MainText>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "80%",
            marginHorizontal: "10%",
          }}
        >
          <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View
              style={[
                styles.box,
                animatedStyles,
                { marginHorizontal: 85, marginBottom: 20 },
              ]}
            >
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../assets/download.png")}
              ></Image>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("Tvsh")}
          >
            <MainButton txtButton="TVSH" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("TatimiNePaga")}
          >
            <MainButton txtButton="Tatimi Ne Paga" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("Taksat")}
          >
            <MainButton txtButton="Taksat" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("Dogana")}
          >
            <MainButton txtButton="Dogana" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("Gjendja")}
          >
            <MainButton txtButton="Gjendja" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={() => navigation.push("Info")}
          >
            <MainButton txtButton="Informata" />
          </TouchableOpacity>
        </View>
      </Screen>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
  },
});

export default Home;
