import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MeasurementHumidityChart from '../components/MeasurementHumidityChart';
import MeasurementPHChart from '../components/MeasurementPHChart';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SensorsScreen({ navigation }: RootTabScreenProps<'Sensors'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensors</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.containerInner}>
        <MeasurementHumidityChart />
        <MeasurementPHChart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInner: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
