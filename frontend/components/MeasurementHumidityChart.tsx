import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as oapi from '../generated/openapi/index';;
import { Text, View } from './Themed';
import * as Victory from 'victory-native';


export default function MeasurementHumidityChart(props : any) {
  const [measurement, setMeasurement] = useState <any>();

  useEffect(() => {
    const dataPromise = oapi.MeasurementHumiditySearchControllerService.executeSearchMeasurementhumidityGet(1)
    dataPromise.then((data) => setMeasurement(data?._embedded?.measurementHumidities));
  }, [])

  return (
    <View>
      <Victory.VictoryChart theme={Victory.VictoryTheme.material}>
      <Victory.VictoryAxis style={{ tickLabels: { angle: -45 } }} fixLabelOverlap={true} />
      <Victory.VictoryLine
        style={{
          data: { stroke: "red" },
          parent: { border: "1px solid #ccc" }
        }}
        data={measurement}
        x = "date"
        y = "point"
      />
      </Victory.VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
