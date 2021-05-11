import React, { useContext,useState } from "react";
import { Text, View ,TouchableOpacity ,TextInput,Alert} from "react-native";
import LabelText from "../components/LabelText";
import MainButton from "../components/MainButton";
import MainText from "../components/MainText";
import RezultatiText from "../components/RezultatiText";
import Screen from "../components/Screen";
import TxtInput from "../components/TxtInput";
import { TatimiContext } from "../context/context";

const Taksat = () => {

   const { addTatimin } = useContext(TatimiContext);

  const [shuma,setShuma] = useState(0);
  const [tatimi,setTatimi] = useState("");

  const KalkuloTaksa = (shuma) => {
      if (shuma.length > 0) {
        setTatimi(shuma);
        addTatimin(shuma,"Taksa");
      } else {
        Alert.alert("Gabim", "Duhet qe fusha te kete 1 ose me shume numra", [
          { text: "OK" },
        ]);
      }
    };

  return (
    <Screen>
      <View style={{alignItems:"center"}}>
       <MainText>TAKSAT</MainText>
        <View
          style={{
            width: "100%",
            marginHorizontal: 40,
            marginTop: 40,
            justifyContent: "space-between",
          }}
        >
          <LabelText>Shuma</LabelText>
          <TxtInput onChangeText={(text) => setShuma(text)} />
        </View>

        <View
          style={{
            width: "100%",
            marginHorizontal: 40,
            justifyContent: "space-between",
          }}
        >
          <LabelText>Taksat</LabelText>
          <RezultatiText>{tatimi}</RezultatiText>

          <TouchableOpacity style={{marginTop: 40}} onPress={() => KalkuloTaksa(shuma)}>
              <MainButton txtButton="Ruaj" />
          </TouchableOpacity>

        </View>
      </View>
    </Screen>
  );
};

export default Taksat;
