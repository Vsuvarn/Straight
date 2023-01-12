import React from 'react';
import {View,FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import Player from './components/Player';
import Styles from '../styles';

let data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
function Straight() {
  return (
    <>
      <View style={Styles.splashContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={item => {
            return (
              <Player data={item.item} index={item.index} />
            );
          }}
          keyExtractor={(item) => {
            
              return item.id;
           
          }}
          // contentContainerStyle={[{borderWidth:1}]}
          ListFooterComponent={() => {
            return (
              <>
                
              </>
            );
          }}
          
         
        />
      </View>
    </>
  );
}

export default Straight;
