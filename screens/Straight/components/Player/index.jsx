import React, {useRef, useEffect, useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import Video from 'react-native-video';
import {useSelector, useDispatch} from 'react-redux';
import Style from './style';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';
import EffectTitle from '../../components/EffectTitle';
import LeftSlidebuttons from '../LeftSlidebuttons';
import UserInfo from '../Userinfo';
import { set } from 'immer/dist/internal';
function Player(props) {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [show, setShow] = useState(false);
  const state = useSelector(state => state.videoReducer);
  const dispatch = useDispatch();

  let player = useRef();
  useEffect(() => {}, []);

  const onControl = action => {
    console.log('action ',action)
    if (action === 'MUTE') {
      setMute(!mute);
    }else if (action === 'PLAY'){
      setPlay(!play);
    }
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },700)
    
  };
  return (
    <View style={[Style.playerContainer]}>
     {console.log('props ',play)}
      <Video
        source={props.data.src} // Can be a URL or a local file.
        ref={ref => {
          player = ref;
        }} // Store reference
        onBuffer={() => {}} // Callback when remote video is buffering
        onError={() => {}} // Callback when video cannot be loaded
        style={Style.backgroundVideo}
        resizeMode="contain"
        paused={play}
        muted={mute}
        repeat={true}
      />
      <View style={{position:'absolute',bottom:'50%',left:'45%',display:show?'flex':'none'}}>
        <IconO name={mute?'mute':'unmute'} size={35} color={'#FFFFFF'}/>
      </View>
      <Pressable
        style={{flex: 1}}
        delayLongPress={1000}
        onPress={() => {
          onControl('MUTE');
        }}
        onLongPress={()=>{
          onControl('PLAY');
        }}
        onPressOut={()=>{
          if (play === true){

            onControl('PLAY');
          }
          
        }}
        >
          
        <View
          style={{flex: 1, backgroundColor: '#00000001', flexDirection: 'row',}}>
            
          <View
            style={{
              height: '60%',
              width: '85%',
              // borderWidth: 1,
              borderColor: 'red',
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: '5%',
            }}>
            <UserInfo data={props.data.user} />

            <EffectTitle />
          </View>
          <LeftSlidebuttons />
        </View>
      </Pressable>
    </View>
  );
}

export default Player;
