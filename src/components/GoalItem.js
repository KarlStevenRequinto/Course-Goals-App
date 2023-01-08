import { Pressable, StyleSheet, Text } from "react-native";

const GoalItem = ({ text,deleteGoalItem,goalId }) => {
  return (
    <Pressable style={styles.goalItemContainer} onPress={deleteGoalItem.bind(this,goalId)}>
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItem: {
    color: "white",
  },
});
