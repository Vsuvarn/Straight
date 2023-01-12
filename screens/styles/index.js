import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
export const fullScreenWidth = Dimensions.get('screen').width;
export const fullScreenHeight = Dimensions.get('screen').height;

//---------------------for response---------------------------------
export const widthToDp = num => {
  let givenWidth = typeof num === 'number' ? num : parseFloat(num);
  return PixelRatio.roundToNearestPixel((fullScreenWidth * givenWidth) / 100);
};
export const heightToDp = num => {
  let givenHeight = typeof num === 'number' ? num : parseFloat(num);
  return PixelRatio.roundToNearestPixel((fullScreenHeight * givenHeight) / 100);
};
//----------------------------------------------------------------
export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
