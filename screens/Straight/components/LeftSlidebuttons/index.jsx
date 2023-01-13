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
      style={Style.leftSlide}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>{
            if (state.is === false) {
                setState((oldState)=>{
                    return {
                        is:!oldState.is,
                        like:oldState.like + 1
                    }
                })
            }else if (state.is === true) {
                setState((oldState)=>{
                    return {
                        is:!oldState.is,
                        like:oldState.like - 1
                    }
                })
            }
        }}>
            {
                state.is ?
                <IconM name="cards-heart" size={30} color={'#FE0100'} />
                :
                <IconM name="cards-heart-outline" size={30} color={'#FFFFFF'} />
            }
       
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
          style={Style.tumbnail}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={Style.tumbnailImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

export default LeftSlidebuttons;
