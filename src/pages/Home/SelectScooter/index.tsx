import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../../components/Button';
import { ScooterItem } from '../../../components/ScooterItem';

import { IScooter } from '../../../types/geo';
import { ISelectScooter } from './types';

import { Container, SubTitle,Title, SubtitleContainer, SubtitleHighlight } from './styles';

import {useSelectScooterController } from './useSelectScooterController';

const SelectScooter = ({nextStep}: ISelectScooter) => {

    const {
        handleSelectScooter,
        scooterSelected,
        scooters,
    } = useSelectScooterController();

    const renderItem = ({item}: { item: IScooter}) => (
        <ScooterItem 
            item={item} 
            idSelected={scooterSelected} 
            onSelect={handleSelectScooter} 
        />

    )

    return(
        <Container>
            <Title>Selecione o Patinete</Title>
            <SubtitleContainer>
                <SubTitle>5 patinetes {" "}</SubTitle>
                <SubtitleHighlight>disponíveis</SubtitleHighlight>
            </SubtitleContainer>
            <FlatList<IScooter>
                data={scooters}
                horizontal={true}
                keyExtractor={(item: IScooter) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
            <Button
                title="Iniciar corrida"
                leftIcon="qr-code-scanner"
                variant='primary'
                disabled={!scooterSelected}
                onPress={nextStep}
            />
        </Container>
    )
}

export { 
    SelectScooter
}