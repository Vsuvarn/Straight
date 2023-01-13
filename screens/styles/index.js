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
  followButton: {
    borderColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: widthToDp(5),
    paddingVertical: heightToDp(0.5),
    borderWidth: 1,
  },
  content: {
    height: heightToDp(4),
    justifyContent: 'center',
  },
  tumbnail: {
    height: heightToDp(5),
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: '#FFFFFF',
  },
  tumbnailImg:{height: heightToDp(5), aspectRatio: 1},
  leftSlide: {
    height: '40%',
    flex: 1,
    // borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight:'5%'
  }
});
