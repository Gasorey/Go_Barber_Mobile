import React from 'react';

import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Container } from './styles';

const CreateAppointment: React.FC = () => {
  const route = useRoute();

  return (
    <Container>
      <View>
        <Text>Teste</Text>
      </View>
    </Container>
  );
};

export default CreateAppointment;
