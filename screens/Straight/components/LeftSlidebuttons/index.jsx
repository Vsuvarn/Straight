import React, {useState} from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import {Text, Avatar,Button} from 'react-native-paper';
import Video from 'react-native-video';
import Style from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
function LeftSlidebuttons() {
  const[state,setState] = useState({is:false,like:10})
  return (
    <View
      style={{
        height: '40%',
        flex: 1,
        // borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>{
            setState((oldState)=>{
                return {
                    is:!oldState.is,
                    like:oldState.like + 1
                }
            })
        }}>
            {
                state.is ?
                <IconM name="cards-heart" size={30} color={'#FE0100'} />
                :
                <IconM name="cards-heart-outline" size={30} color={'#FFFFFF'} />
            }
        {/* <IconM name="cards-heart-outline" size={30} color={'#FFFFFF'} /> */}
        </TouchableOpacity>
        <Text variant="labelSmall" style={{color: '#FFFFFF'}}>
        {state.like}
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <IconM name="comment-outline" size={28} color={'#FFFFFF'} />
        <Text variant="labelSmall" style={{color: '#FFFFFF'}}>
          {5}
        </Text>
      </View>
      <View>
        <IconF name="send" size={26} color={'#FFFFFF'} />
      </View>
      <View>
        <IconM name="dots-vertical" size={28} color={'#FFFFFF'} />
      </View>
      <View>
        <View
          style={{
            height: 40,
            aspectRatio: 1,
            borderRadius: 10,
            borderWidth: 2,
            overflow: 'hidden',
            borderColor: '#FFFFFF',
          }}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={{height: 40, aspectRatio: 1}}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

export default LeftSlidebuttons;
