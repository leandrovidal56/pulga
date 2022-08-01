import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { 
    Container,
    ScooterInfo,
    ScooterName,
    ScooterCode,
    ScooterBaterry,
    ScooterDistancy,
    ScooterImage,
    Wrapper
} from './styles'
import { IScooterItemProps } from './types'

const ScooterItem = ({ item, onSelect, idSelected} : IScooterItemProps) => {
    const handleSelect = () => { 
        onSelect(item.id);
    }

    return (
        <Wrapper onPress={handleSelect}>
            <Container isSelected={idSelected === item.id}>
                <ScooterImage 
                    source={{ uri: item.picture}} 
                    resizeMode="center" 
                />
                <ScooterInfo>
                    <ScooterName>{item.name}</ScooterName>
                    <ScooterCode>{item.code}</ScooterCode>
                    <ScooterBaterry battery={item.battery}>
                        <FontAwesome
                            name={item.battery > 50 ? 'battery-4' : 'battery-2'}
                            size={16}
                            color={item.battery > 50 ? 'green' : '#ffd43b'}
                         />{ " "}
                         {item.battery}%
                    </ScooterBaterry>
                    <ScooterDistancy>
                        <FontAwesome name="map-o" size={16} color="#868e96" />
                        {" "} {item.distancy}km
                    </ScooterDistancy>
                </ScooterInfo>
            </Container>
        </Wrapper>
    )
}

export {
    ScooterItem
}