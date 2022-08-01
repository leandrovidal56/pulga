import React from 'react'; 
import { Container, Loader, Text} from './styles';

const Loading = () => {
    return(
        <Container>
            <Loader size="large" color="#fffff" />
            <Text> Carregando localização, aguarde!</Text>
        </Container>
        
    )
}

export {
    Loading
}