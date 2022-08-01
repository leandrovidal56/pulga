import { Dimensions } from 'react-native';

export const MapStyle = {
    zIndex: -1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 98
}

export const ModalStyle = {
    paddingVertical: 27,
    paddingHorizontal: 20,
}