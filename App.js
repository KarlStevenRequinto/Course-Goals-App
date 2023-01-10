import { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoal = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoal();
  };

  const deleteGoal = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  };

  const startAddGoal = () => {
    setModalIsVisible(true);
  };

  const endAddGoal = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" color="#a065ec" onPress={startAddGoal} />
      {modalIsVisible && (
        <GoalInput
          addGoal={addGoal}
          showModal={modalIsVisible}
          endAddGoal={endAddGoal}
        />
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                text={item.text}
                deleteGoalItem={deleteGoal}
                goalId={item.id}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  goalsContainer: {
    flex: 5,
  },
});
