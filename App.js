import React, {useState} from 'react';

import {SafeAreaView, Text, Button} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      <Box rounded={visible} size="large" color="blue" />
    </SafeAreaView>
  );
};
export default App;
