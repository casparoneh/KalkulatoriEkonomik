import React,{createContext,useState,useEffect} from 'react';
import { Alert } from 'react-native'
export const TatimiContext = createContext();

const TatimiContextProvider = (props) => {


    const [tatimi,setTatimi] = useState([]);
    // const [shuma,setShuma] = useState(0);

    // const KalkuloTaksa = (shuma) => {
    //     if (shuma.length > 0) {
    //       setTatimi(shuma);
    //       addTatimin(shuma);
    //     } else {
    //       Alert.alert("Gabim", "Duhet qe fusha te kete 1 ose me shume numra", [
    //         { text: "OK" },
    //       ]);
    //     }
    //   };
     

   
      const addTatimin = (tatimiArg,type) => {
        setTatimi([...tatimi,{shuma: tatimiArg,id: Math.random().toString(),type: type }])
      }
    return(
       <TatimiContext.Provider value={{tatimi,setTatimi,addTatimin}}>
           {props.children}
       </TatimiContext.Provider>
      )
}

export default TatimiContextProvider;
