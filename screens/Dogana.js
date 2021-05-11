import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet
} from "react-native";
// import {globalStyles} from "../styles/global";
import { TatimiContext } from "../context/context";
import Screen from "../components/Screen";
import MainText from "../components/MainText";
import LabelText from "../components/LabelText";
import TxtInput from "../components/TxtInput";
import RezultatiText from "../components/RezultatiText";
import MainButton from "../components/MainButton";

const Dogana = () => {
  const [shuma, setShuma] = useState(0);
  const [tvshPerDogane, setTvshPerDogane] = useState(0);
  const [tatimiNeImport, setTatimiNeImport] = useState(0);
  const [totali, setTotali] = useState(0);
  const { addTatimin } = useContext(TatimiContext);

  const KalkuloDoganen = (shuma) => {
    // 
    var tatimDogane = (10/100)*shuma;
    var total = tatimDogane + Number(tatimiNeImport);

    if(shuma.length > 0){
        
       
        
         if(shuma < 22){
          
          setTatimiNeImport(tatimDogane);

           setTotali(total);
           addTatimin(total,"Dogana");
           
         }
         else {
          
         
          setTatimiNeImport(tatimDogane);
          var tvshDogane = (18/100)*shuma;
          setTvshPerDogane(tvshDogane);
       
          setTotali(tvshDogane + tatimDogane);
          addTatimin(tvshDogane + tatimDogane,"Dogana");
         }
         

    } else {
      Alert.alert("Gabim", "Duhet qe fusha te kete 1 ose me shume numra", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <Screen>
      <ScrollView>
        <MainText>DOGANA</MainText>

        <View>
          <View style={styles.single}>
            <LabelText>Shuma</LabelText>
            <TxtInput onChangeText={(text) => setShuma(text)} />
          </View>
          <View style={styles.single}>
            <LabelText>TVSH</LabelText>
            <RezultatiText>{tvshPerDogane}</RezultatiText>
          </View>
          <View style={styles.single}>
            <LabelText>Tatimi ne Import</LabelText>
            <RezultatiText>{tatimiNeImport}</RezultatiText>
          </View>
          <View style={styles.single}>
            <LabelText>Totali</LabelText>
            <RezultatiText>{totali}</RezultatiText>
          </View>

          <TouchableOpacity onPress={() => KalkuloDoganen(shuma)}>
            <MainButton txtButton="Ruaj" />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  single: {
    marginVertical: 20,
  }
})
export default Dogana;
