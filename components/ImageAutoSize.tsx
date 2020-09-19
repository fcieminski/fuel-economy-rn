import React, { memo, useCallback, useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const ImageAutoSize = ({ uri, onPress }) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const getSizes = useCallback(() => {
    Image.getSize(
      uri,
      (width: number, height: number) => {
        setSize({
          width,
          height,
        });
      },
      () => {
        setSize({
          width: 0,
          height: 0,
        });
      },
    );
  }, []);

  useEffect(() => {
    getSizes();
  }, []);

  return (
    <Image onPress={onPress} source={{ uri }} style={{ height: size.height, width: size.width }} />
  );
};

export default memo(ImageAutoSize);
