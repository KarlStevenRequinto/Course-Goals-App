import { StyleSheet, TextInput, View, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInput = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInput}
      />
      <Button title="Add Goal" onPress={() => addGoal(enteredGoalText)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
