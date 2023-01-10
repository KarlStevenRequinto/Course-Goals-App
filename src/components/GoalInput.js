import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoal, showModal, endAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInput}
        />
        <View style={styles.btnContainer}>
          <View style={styles.buttons}>
            <Button title="Add Goal" onPress={() => addGoal(enteredGoalText)} color="#b180f0"/>
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={endAddGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    backgroundColor:"#e4d0ff",
    color:"#120438",
    borderRadius:6
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
