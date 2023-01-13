import React, {useState} from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import Style from '../../../styles';

function UserInfo(props) {
    const [state,setState] = useState(false) 
  return (
    <View style={{paddingHorizontal: '5%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
            {console.log('props===>',props)}
        <Avatar.Image size={35} source={{uri: 'https://i.pravatar.cc/300'}} />

        <Text variant="titleSmall" style={{color: '#FFFFFF', marginLeft: '3%'}}>
          {props.data.id}
        </Text>
        <TouchableOpacity style={{ marginLeft: '4%',}} onPress={() => setState(!state)}>
        <View
          style={Style.followButton}
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
        style={Style.content}>
        <Text variant="titleSmall" style={{color: '#FFFFFF'}}>
          Eu cupidatat nulla cupidatat eu...
        </Text>
      </View>
    </View>
  );
}

export default UserInfo;
