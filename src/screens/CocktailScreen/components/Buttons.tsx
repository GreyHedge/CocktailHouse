import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Box, Button} from '../../../components';
import {Colors, ESpacings} from '../../../constants';

export const Buttons: React.FC = () => {
  return (
    <Box
      backgroundColor={Colors.blue}
      width={50}
      marginTop={50}
      paddingVertical={ESpacings.s16}
      borderBottomLeftRadius={25}
      borderTopLeftRadius={25}
      alignItems="center"
      style={styles.container}>
      <Button radius={25} onPress={()=>{}}>
        <Box
          width={50}
          height={50}
          borderRadius={25}
          alignItems="center"
          justifyContent="center">
          <Icon
            name={"close"}
            color={Colors.dark}
            size={20}
          />
        </Box>
      </Button>
      <Button radius={25} onPress={()=>{}}>
        <Box
          width={50}
          height={50}
          borderRadius={25}
          alignItems="center"
          justifyContent="center">
          <Icon
            name={"home"}
            color={Colors.dark}
            size={20}
          />
        </Box>
      </Button>
      <Button radius={25} onPress={()=>{}}>
        <Box
          width={50}
          height={50}
          borderRadius={25}
          alignItems="center"
          justifyContent="center">
          <Icon
            name={"hearto"}
            color={Colors.dark}
            size={20}
          />
        </Box>
      </Button>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    elevation: 10,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});
