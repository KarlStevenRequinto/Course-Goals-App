import { Pressable, StyleSheet, Text ,View} from "react-native";

const GoalItem = ({ text, deleteGoalItem, goalId }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        onPress={deleteGoalItem.bind(this, goalId)}
        android_ripple={{ color: "#210644" }}
        style={({pressed})=>pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity:0.5
  },
  goalItem: {
    color: "white",
    padding: 8,
  },
});
