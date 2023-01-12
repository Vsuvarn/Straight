import {StyleSheet} from 'react-native';
import {
  fullScreenHeight,
  fullScreenWidth,
  heightToDp,
  widthToDp,
} from '../../../../styles';
export default StyleSheet.create({
  playerContainer: {
    height: heightToDp(96) ,
    width: fullScreenWidth,
    borderWidth: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#14202A'
  },
});
