import React,{useState,useEffect,useRef} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import Player from './components/Player';
import Styles from '../styles';

let data = [
  {id: 1, src: require('../../assets/video1.mp4'),user:{id:'3.95jerry'}},
  {id: 2, src: require('../../assets/video2.mp4'),user:{id:'filter.kaafi'}},
  {id: 3, src: require('../../assets/video3.mp4'),user:{id:'thetechchap'}},
  {id: 4, src: require('../../assets/video4.mp4'),user:{id:'amirinalooii'}},
];
function Straight() {
  const [currentIndex, viewableItems] = useState(0);
  const ref = useRef()
  useEffect(()=>{
    console.log('ref ',ref)
  },[])
  return (
    <>
      <View >
        <FlatList
          ref={ref}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          data={data}
          initialNumToRender={0}
          removeClippedSubviews={false}
          renderItem={item => {
            return <Player data={item.item} index={item.index}/>;
          }}
          keyExtractor={item => {
            return item.id;
          }}
         
          
          ListFooterComponent={() => {
            return <></>;
          }}
        />
      </View>
    </>
  );
}

export default Straight;
