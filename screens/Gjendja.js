import React, { useContext } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainText from "../components/MainText";
import Screen from "../components/Screen";
import { TatimiContext } from "../context/context";
import globalStyles from "../styles/global";

const Gjendja = () => {
  const { tatimi, setTatimi } = useContext(TatimiContext);

  const deleteItem = (id) => {
    const filterItem = tatimi.filter((item) => item.id !== id);
    console.log(filterItem);
    setTatimi(filterItem);
  };

  return (
    <ScrollView>
      <Screen>
        <View style={{ marginBottom: 30 }}>
          <MainText>Gjendja</MainText>
        </View>
        <View>
          {tatimi.length > 0 ?  <View>
            {tatimi.map((item) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{item.type}</Text>
                  <Text style={{ fontSize: 18 }}>{item.shuma.toFixed(2)}</Text>
                  <TouchableWithoutFeedback onPress={() => deleteItem(item.id)}>
                    <View
                      style={{
                        backgroundColor: "red",
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Fshije</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
          </View> : <View></View>}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Totali i shumes se tatimeve eshte :{" "}
            </Text>
            <Text style={{ fontSize: 16 }}>
              {tatimi.reduce((prevValue, currentValue) => {
                return (Number(prevValue) + Number(currentValue.shuma)).toFixed(
                  2
                );
              }, 0)}
            </Text>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

export default Gjendja;
