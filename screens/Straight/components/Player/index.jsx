import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import {Text, Avatar,Button} from 'react-native-paper';
import Video from 'react-native-video';
import Style from './style';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import EffectTitle from '../../components/EffectTitle';
import LeftSlidebuttons from '../LeftSlidebuttons';
import UserInfo from '../Userinfo';
function Player(props) {
  let player = useRef();
  return (
    <View style={[Style.playerContainer]}>
      <Video
        source={require('../../../../assets/pexels.mp4')} // Can be a URL or a local file.
        ref={ref => {
          player = ref;
        }} // Store reference
        onBuffer={() => {}} // Callback when remote video is buffering
        onError={() => {}} // Callback when video cannot be loaded
        style={Style.backgroundVideo}
        resizeMode="contain"
      />
      <View
        style={{flex: 1, backgroundColor: '#FFFFFF00', flexDirection: 'row'}}>
        <View
          style={{
            height: '60%',
            width: '85%',
            // borderWidth: 1,
            borderColor: 'red',
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            paddingBottom:'5%'
          }}>
          <UserInfo/>

          <EffectTitle />
        </View>
        <LeftSlidebuttons />
      </View>
    </View>
  );
}

export default Player;
