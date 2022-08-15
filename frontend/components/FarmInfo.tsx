import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Colors from '../constants/Colors';
import * as oapi from '../generated/openapi/index';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function FarmInfo(props : any) {
  const [farmInfo, setFarmInfo] = useState<oapi.EntityModelFarm>();
  
  useEffect(() => {
    const dataPromise = oapi.FarmEntityControllerService.getItemResourceFarmGet("1");
    dataPromise.then((data) => setFarmInfo(data));
  }, [])

  return (
    <View>
      <View style={styles.getStartedContainer}>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <Text>Name: {farmInfo?.name}</Text>
          <Text>Owner: {farmInfo?.owner}</Text>
        </View>
      </View>
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
  }
});
