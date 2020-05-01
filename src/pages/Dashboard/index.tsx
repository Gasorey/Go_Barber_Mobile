import React from 'react';

import { View, Button, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // paddingTop: 500,
      }}
    >
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fed8de',
          paddingBottom: 250,
          fontSize: 30,
          paddingLeft: 50,
          paddingTop: 100,
        }}
      >
        Muito obrigado por assistir, novidades em breve!
      </Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
