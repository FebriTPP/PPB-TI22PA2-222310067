import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = () => {
    if (email === "222310067@student.ibik.ac.id") {
      if (password === "222310067") {
        setAlertMessage("Login Berhasil");
        Alert.alert("Success", "Login Berhasil");
      } else {
        setAlertMessage("Password yang dimasukkan salah!");
        Alert.alert("Error", "Password yang dimasukkan salah!");
      }
    } else {
      setAlertMessage("Email yang dimasukkan salah!");
      Alert.alert("Error", "Email yang dimasukkan salah!");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.header}>Login Email</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Masukan Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInputText}
              placeholder="Masukan Password"
              placeholderTextColor="gray"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Icon
                name={passwordVisible ? "eye" : "eye-slash"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button title="Submit" onPress={handleSubmit} />
        {alertMessage ? <Text style={styles.alert}>{alertMessage}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
  },
  passwordInputText: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  alert: {
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
  eyeIcon: {
    padding: 10,
  },
});
