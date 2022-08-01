import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button, View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import MapView, {Marker} from 'react-native-maps';
import MapMarkerImage from '../../../assets/images/marker.png'
import { Header } from '../../components/Header';
import { HomeProps } from '../../types/navigation';
import { useHomeController } from './useHomeController';

import { MapStyle, ModalStyle } from './styles';
import { Loading } from '../../components/Loading';
import { SelectScooter } from './SelectScooter';
import { ReadQRCode } from './ReadQRCode';
import { StartRide } from './StartRide';
import { FinishRide } from './FinishRide';

const Home = () => {
    const navigation = useNavigation<HomeProps>();
    const { 
        handleOpenModal,
        handleCloseModal,
        bottomSheetModalRef, 
        snapPoints, 
        currentCity, 
        currentLocation, 
        locations,
        currentStep,
        handleFinishRide,
        handleResetRide,
        handleDoneRide,
        handleNextStep,
        rideDuration,
        setRideDuration,
     } = useHomeController();

    if(!currentLocation?.coords){
        return <Loading/>
    }
    console.log(locations)
    

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <BottomSheetModalProvider>
            <Header currentCity={currentCity} />
            <MapView style={MapStyle} initialRegion={{
                latitude: -21.26157488697715,
                longitude: -48.32320549992907,
                // latitude: currentLocation?.coords.latitude || 0,
                // longitude: currentLocation?.coords.longitude || 0,
                latitudeDelta: 0.06,
                longitudeDelta: 0.06
            }} >
                {locations.length
                 ? locations.map((location) => (
                        <Marker coordinate={{
                            latitude: location.lat,
                            longitude: location.lng,
                        }}
                        image={MapMarkerImage}
                        onPress={handleOpenModal}
                        />
                     ))
                 : null } 
            </MapView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                animateOnMount={true}
                style={ModalStyle} 
                snapPoints={snapPoints}       
            >
                {currentStep === 1 ? <SelectScooter nextStep={handleNextStep} /> : null}
                {currentStep === 2 ? <ReadQRCode nextStep={handleNextStep} /> : null}
                {currentStep === 3 ? (
                <StartRide handleFinishRide={handleFinishRide} />
                ) : null}
                {currentStep === 4 ? (
                <FinishRide finishRide={handleDoneRide} rideDuration={rideDuration} />
                ) : null}
            </BottomSheetModal>
            </BottomSheetModalProvider>
        </View>
    )
}
export {Home}