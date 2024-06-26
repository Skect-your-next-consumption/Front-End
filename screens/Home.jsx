import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button title="Go to test" onPress={() => navigation.navigate("Test")} />
      <Button
        title="Go to Diary"
        onPress={() => navigation.navigate("그림일기")}
      />
      <Button title="Go to test" onPress={() => navigation.navigate("Testr")} />
      <Button
        title="Go to ContatctList"
        onPress={() => navigation.navigate("ContatctList")}
      />
      <Button
        title="Go to SYTest"
        onPress={() => navigation.navigate("SYTest")}
      />
      <Button
        title="Go to SYTest2"
        onPress={() => navigation.navigate("SYTest2")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
