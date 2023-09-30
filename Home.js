import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { ComponenteTest } from './Componentes';





export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ComponenteTest nome='Data'/>
      <Button title='HOME' onPress={()=>{
navigation.navigate('Cadastro')

      }}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
