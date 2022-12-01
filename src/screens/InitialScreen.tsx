import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const InitialScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('Welcome to React')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default InitialScreen;
