import { useFocusEffect } from '@react-navigation/native';
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ArchiveButton from '../components/ArchiveButton';
import CarFuellingHistory from '../components/CarFuellingHistory';

const months = [
  { title: 'Styczeń', id: 0 },
  { title: 'Luty', id: 1 },
  { title: 'Marzec', id: 2 },
  { title: 'Kwiecień', id: 3 },
  { title: 'Maj', id: 4 },
  { title: 'Czerwiec', id: 5 },
  { title: 'Lipiec', id: 6 },
  { title: 'Sierpień', id: 7 },
  { title: 'Wrzesień', id: 8 },
  { title: 'Październik', id: 9 },
  { title: 'Listopad', id: 10 },
  { title: 'Grudzień', id: 11 },
];
const ArchiveScreen: React.FC = () => {
  const [date, setDate] = useState<number | string>(0);
  const scroll = useRef<RefObject<ScrollView>>(null);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    setDate(currentMonth);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (scroll) {
        scroll.current.scrollTo({ x: 110 * (date - 1) });
      }
    }, []),
  );

  const handlePress = (e) => {
    console.log(e);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        <ScrollView ref={scroll} horizontal style={{ flexDirection: 'row' }}>
          {months.map((month, index) => {
            return (
              <ArchiveButton onPress={handlePress} title={month.title} id={month.id} key={index} />
            );
          })}
        </ScrollView>
      </View>
      <CarFuellingHistory />
    </View>
  );
};

export default ArchiveScreen;
