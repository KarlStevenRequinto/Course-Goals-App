import { StyleSheet, TextInput, View, Button, Modal ,Image} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoal, showModal,endAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInput}
        />
        <View style={styles.btnContainer}>
          <View style={styles.buttons}>
            <Button title="Add Goal" onPress={() => addGoal(enteredGoalText)} />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={endAddGoal}/>
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
});
