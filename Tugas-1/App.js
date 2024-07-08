import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyProfile from './components/MyProfile';

export default function App() {
  return (
    <SafeAreaView>
      <MyProfile/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#526e75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});