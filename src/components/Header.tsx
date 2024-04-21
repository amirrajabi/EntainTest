import {View, Text} from 'react-native';
import React from 'react';

type HeaderProps = {
  title: string;
};

export default function Header({title}: HeaderProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
