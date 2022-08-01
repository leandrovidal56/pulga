import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { appFonts } from '../../styles/fonts';
import BannerBackground from '../../../assets/images/banner/banner.png';
import { Button } from '../../components/Button';

import {
    Container,
    ContentContainer,
    ButtonContainer,
    ImageHeader,
    SubTitle,
    Title,

} from './styles'
import { OnBoardProps } from '../../types/navigation';


const OnBoarding = () => {
    const navigation = useNavigation<OnBoardProps>();
    const handleGoToHome = () => {
        navigation.navigate({name: 'Home', key: 'Home'})
    }

    return (
        <Container>
            <ImageHeader source={BannerBackground} />
            <ContentContainer>
                <Title>Descubra a cidade</Title>
                <SubTitle>A forma mais divertida e rápida de conhecer lugares incríveis</SubTitle>
            </ContentContainer>
                <ButtonContainer>
                    <Button title="Entrar" onPress={handleGoToHome}/>
                </ButtonContainer>

        </Container>
    )
}

export  {OnBoarding}