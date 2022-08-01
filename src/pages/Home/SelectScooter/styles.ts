import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { appFonts } from '../../../styles/fonts';

export const Container = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${Platform.OS === 'ios' ? '62px' : '42px'};
`

export const SubtitleContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 16px  0px;
`

export const Title = styled.Text`
    font-size: ${appFonts.bold};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.background.main};
`

export const SubTitle = styled.Text`
    font-size: ${appFonts.regular};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.background.main};
`

export const SubtitleHighlight = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.background.main};
`
