import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';

import {
    ButtonContainer, 
    ButtonText, 
    IconContainer
} from './styles'
import { IButton } from './types';

const Button = ({title, leftIcon, variant, ...rest}: IButton) => {
    return (
        <ButtonContainer variant={variant}{...rest}>
            {leftIcon && 
                <IconContainer>
                    <MaterialIcons name={leftIcon} size={18} color="white"/>
                </IconContainer>
            }
            <ButtonText variant={variant}>{title}</ButtonText>
        </ButtonContainer>
    )
}
export {Button}