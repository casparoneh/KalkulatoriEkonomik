import React, { useContext, useState } from "react";
import { globalStyles } from "../styles/global";
import {
  View,
  Text,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";
import { TatimiContext } from "../context/context";
import Screen from "../components/Screen";
import MainText from "../components/MainText";
import TxtInput from "../components/TxtInput";
import LabelText from "../components/LabelText";
import RezultatiText from "../components/RezultatiText";
import MainButton from "../components/MainButton";

const TatimiNePaga = () => {
  const [pagaBruto, setPagaBruto] = useState(0);
  const [perqindja, setPerqindja] = useState("5");
  const [pagaQeTatohet, setPagaQeTatohet] = useState(0);
  const [gjithsejTatimi, setGjithsejTatimi] = useState(0);
  const [pagaNeto, setPagaNeto] = useState(0);

  const { addTatimin } = useContext(TatimiContext);

  const KalkuloTatimin = (pagabruto) => {
    if (pagaBruto.length > 0) {
      var tempdata = pagabruto * (perqindja / 100);
      var pagaqeTatohet = pagaBruto - tempdata;

      setPagaQeTatohet(pagaqeTatohet);

      var gjTatimi = 0;

      if (pagaqeTatohet > 80) {
        gjTatimi += (250 - 80) * 0.04;
        console.log(gjTatimi);
      }
      if (pagaqeTatohet > 250) {
        gjTatimi += (450 - 250) * (8 / 100);
        console.log(gjTatimi);
      }
      if (pagaqeTatohet > 450) {
        gjTatimi += (pagaqeTatohet - 450) * (10 / 100);
      }
      setGjithsejTatimi(gjTatimi);

      setPagaNeto(pagaqeTatohet - gjTatimi);

      addTatimin(gjTatimi,"Tatimi ne Page");
    } else {
      Alert.alert(
        "Gabim",
        "Duhet qe fusha Paga Bruto te kete 1 ose me shume numra",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <ScrollView>
      <Screen>
        <View>
          <View style={{marginBottom: 30}}>
          <MainText>Tatimi Ne Paga</MainText>
          </View>
          <View style={styles.single}>
            <LabelText>Paga Bruto</LabelText>
            <TxtInput onChangeText={(text) => setPagaBruto(text)} />
          </View>
          <View style={styles.single}>
            <LabelText>Kontributi i punetorit % </LabelText>

            <Picker
              mode="dropdown"
              style={globalStyles.textinput}
              selectedValue={perqindja}
              onValueChange={(itemValue, itemIndex) => {
                setPerqindja(itemValue);
              }}
            >
              <Picker.Item label="5" value="5"></Picker.Item>
              <Picker.Item label="10" value="10"></Picker.Item>
            </Picker>
          </View>
          <View style={styles.single}>
            <LabelText>Paga qe tatohet</LabelText>
            <RezultatiText>{pagaQeTatohet}</RezultatiText>
          </View>
          <View style={styles.single}>
            <LabelText>Gjithsej Tatimi</LabelText>
            <RezultatiText>{gjithsejTatimi}</RezultatiText>
          </View>
          <View style={styles.single}>
            <LabelText>Paga Neto</LabelText>
            <RezultatiText>{pagaNeto}</RezultatiText>
          </View>

          <View>
            <TouchableOpacity
              style={[styles.single, { marginBottom: 20 }]}
              onPress={() => KalkuloTatimin(pagaBruto)}
            >
              <MainButton txtButton="Ruaj" />
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  single: {
    marginVertical: 10,
  },
});
export default TatimiNePaga;
