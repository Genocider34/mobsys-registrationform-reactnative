import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.rootScreen}>
      <View style={styles.header}>
        <Text style={styles.textHead}>Sign Up</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>First Name</Text>
        <TextInput style={styles.input}>abcde</TextInput>

        <Text style={styles.text}>Last Name</Text>
        <TextInput style={styles.input}>xyz</TextInput>

        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input}>pqr</TextInput>

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input}>***</TextInput>

        <Text style={styles.text}>Confirm Password</Text>
        <TextInput style={styles.input}>***</TextInput>
      </View>

      <View style={styles.buttonOuterContainer}>
        <Pressable style={styles.buttonInnerContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#070A0C",
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#9EC9DB",
  },
  textHead: {
    color: "#E5E8E9",
    fontSize: 24,
    fontFamily: "poppins-regular",
  },
  main: {
    marginVertical: 24,
    marginHorizontal: 25,
  },
  text: {
    marginBottom: 12,
    color: "#9EC9DB",
    fontSize: 20,
    fontFamily: "poppins-regular",
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: "gray",
    color: "#E5E8E9",
    fontSize: 20,
    paddingVertical: 6,
    fontFamily: "poppins-regular",
  },
  buttonOuterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInnerContainer: {
    backgroundColor: "#9EC9DB",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "poppins-regular",
    color: "#070A0C",
  },
});
