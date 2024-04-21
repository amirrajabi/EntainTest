import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Category {
  id: string;
  label: string;
}

interface Props {
  onCategoryChange: (selectedCategoryId: string) => void;
}

const CategoryFilter: React.FC<Props> = ({onCategoryChange}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const categories: Category[] = [
    {id: '', label: 'All'},
    {id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61', label: 'Greyhound'},
    {id: '161d9be2-e909-4326-8c2c-35ed71fb460b', label: 'Harness'},
    {id: '4a2788f8-e825-4d36-9894-efd4baf1cfae', label: 'Horse'},
  ];

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category:</Text>
      <View style={styles.buttonGroup}>
        {categories.map(category => (
          <Button
            key={category.id}
            title={category.label}
            onPress={() => handleCategoryPress(category.id)}
            color={selectedCategoryId === category.id ? '#2196F3' : '#ccc'}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CategoryFilter;
