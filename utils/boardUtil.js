import { View } from "react-native";
import { boardStyles } from "../styles/board";

export const getNewBoard = (w, h) => {
  let elements = [];
  for (let i = 0; i < w; i++) {
    let currentElem = [];
    for (let x = 0; x < h; x++) {
      let num = Math.floor(Math.random() * 2);
      let s =
        num == 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" };
      currentElem.push({ ...s, ...boardStyles.boxSize });
    }
    elements.push(
      <View style={{ ...boardStyles.rowContainer }} key={i}>
        {currentElem.map((value, index) => {
          return <View style={value} key={index} />;
        })}
      </View>
    );
  }
  return (
    <View>
      {elements.map((value) => {
        return value;
      })}
    </View>
  );
};
