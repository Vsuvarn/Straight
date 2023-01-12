import React, {useState} from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import Style from '../../../styles';

function UserInfo() {
    const [state,setState] = useState(false) 
  return (
    <View style={{paddingHorizontal: '5%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar.Image size={35} source={{uri: 'https://i.pravatar.cc/300'}} />

        <Text variant="titleSmall" style={{color: '#FFFFFF', marginLeft: '3%'}}>
          Suntfug134
        </Text>
        <TouchableOpacity style={{ marginLeft: '4%',}} onPress={() => setState(!state)}>
        <View
          style={{
            borderColor: '#FFFFFF',
            borderRadius: 6,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderWidth: 1,
           
          }}
          >
          <Text variant="bodySmall" style={{color: '#FFFFFF'}}>
            {
                !state ?
                'Follow':'Following'
            }
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: '3%'}}>
        <Text variant="bodySmall" style={{color: '#FFFFFF'}}>
          Nisi occaecat non quis deserunt.
        </Text>
      </View>
      <View
        style={{
          height: 30,

          justifyContent: 'center',
        }}>
        <Text variant="titleSmall" style={{color: '#FFFFFF'}}>
          Eu cupidatat nulla cupidatat eu...
        </Text>
      </View>
    </View>
  );
}

export default UserInfo;
