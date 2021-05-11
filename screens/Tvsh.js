import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TatimiContext } from "../context/context";
import Screen from "../components/Screen";
import MainText from "../components/MainText";
import LabelText from "../components/LabelText";
import TxtInput from "../components/TxtInput";
import {globalStyles} from "../styles/global";
import RezultatiText from "../components/RezultatiText";
import MainButton from "../components/MainButton";

const Tvsh = () => {
  const { addTatimin } = useContext(TatimiContext);

  const [shuma, setShuma] = useState(0);
  const [perqindja, setPerqindja] = useState("18");
  const [tatimi, setTatimi] = useState(0);

  const KalkuloTatimin = (shuma, perqindja) => {
    if (shuma.length > 0) {
      setTatimi((perqindja / 100) * shuma);
      addTatimin((perqindja / 100) * shuma,"TVSH");
    } else {
      Alert.alert("Gabim", "Duhet qe fusha te kete 1 ose me shume numra", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <Screen>
      <MainText>TVSH</MainText>
      <View>
        <LabelText>Shuma</LabelText>
        <TxtInput onChangeText={(text) => setShuma(text)} />
        <LabelText>Perqindja</LabelText>

        <Picker
          mode="dropdown"
          style={globalStyles.textinput}
          selectedValue={perqindja}
          onValueChange={(itemValue, itemIndex) => {
            setPerqindja(itemValue);
          }}
        >
          <Picker.Item label="8" value="8"></Picker.Item>
          <Picker.Item label="18" value="18"></Picker.Item>
        </Picker>
        <LabelText>TVSH</LabelText>
        <RezultatiText>{tatimi}</RezultatiText>

        <TouchableOpacity style={{marginTop:40}} onPress={() => KalkuloTatimin(shuma, perqindja)}>
          <MainButton  txtButton="Ruaj" />
        </TouchableOpacity>

      </View>
    </Screen>
  );
};

export default Tvsh;
