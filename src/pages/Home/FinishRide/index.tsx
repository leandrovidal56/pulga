// import React from 'react'; 
// import { Rating } from 'react-native-ratings';
// import { Button } from '../../../components/Button';
// import { secondsToTime } from '../../../utils';
// import {
//     Container,
//     RatingTitle,
//     SubTitleContainer,
//     Time,
//     Title
// } from './styles'
// import { IFinishRide } from './types';

// const FinishRide = ({ finishRide, rideDuration}: IFinishRide) => {
//     return (
//         <Container>
//             <Title>Corrida finalizada</Title>
//             {/* <Time>{secondsToTime(25)}</Time> */}
//             {/* <Time>{secondsToTime(rideDuration)}</Time> */}
//             <Time>(rideDuration)</Time>
//             <RatingTitle>Como foi sua viagem ?</RatingTitle>
//             <Rating style={{ paddingVertical: 10}}/>
//             <Button 
//                 title="Avaliar"
//                 variant='primary'
//                 onPress={finishRide}
//                 // onPress={() => {}}
//             />
//         </Container>
//     )

// }

// export {
//     FinishRide
// }

import React from "react";
import { Rating } from "react-native-ratings";
import { Button } from "../../../components/Button";
import { secondsToTime } from "../../../utils/timer";

import {
  Container,
  RatingTitle,
  SubtitleContainer,
  Time,
  Title,
} from "./styles";
import { IFinishRide } from "./types";

const FinishRide = ({ finishRide, rideDuration }: IFinishRide) => {
  return (
    <Container>
      <Title>Corrida Finalizada</Title>
      <Time>{secondsToTime(rideDuration)}</Time>
      <RatingTitle>Como foi sua viagem?</RatingTitle>
      <Rating style={{ paddingVertical: 10 }} />
      <Button title="Avaliar" variant="primary" onPress={finishRide} />
    </Container>
  );
};

export { FinishRide };