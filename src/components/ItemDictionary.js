import React from 'react';
import PropTypes from 'prop-types';

import {Avatar, Chip} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export const ItemDictionary = ({original, substitute}) => {
  return (
    <Chip
      style={styles.containerChip}
      avatar={<Avatar.Text size={28} label={substitute} />}>
      {original}
    </Chip>
  );
};

const styles = StyleSheet.create({
  containerChip: {
    margin: 2,
    width: 62,
  },
});

ItemDictionary.propTypes = {
  original: PropTypes.string.isRequired,
  substitute: PropTypes.string.isRequired,
};
