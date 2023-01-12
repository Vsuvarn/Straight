import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LottieView from 'lottie-react-native';
function EffectTitle() {
  return (
    <View
      style={{
        height: '5%',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
      }}>
      <View style={{justifyContent: 'center'}}>
        <LottieView
          source={require('../../../../assets/music_wave.json')}
          autoPlay={true}
          loop={true}
          // ref={refLoading}
          style={{height: 13, aspectRatio: 1}}
        />
      </View>
      <View style={{flex: 3, borderColor: 'white', paddingHorizontal: '1%'}}>
        <Text variant="bodySmall" style={{color: '#FFFFFF'}}>
          Culpa pariatur sit esse nostrud{' '}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text variant="labelSmall" style={{color: '#FFFFFF'}}>
          Effect...
        </Text>
      </View>
    </View>
  );
}

export default EffectTitle;
