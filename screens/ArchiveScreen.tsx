import { useFocusEffect } from '@react-navigation/native';
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { View, ScrollView, Text, GestureResponderEvent } from 'react-native';
import { Card } from 'react-native-elements';
import ArchiveButton from '../components/ArchiveButtons';
import FuellingHistory from '../components/Fuelling/FuellingHistory';
import { historyScreenStyles } from '../styles/styles';

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
  const [date, setDate] = useState<number>(0);
  const scroll = useRef<RefObject<ScrollView>>(null);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    setDate(currentMonth);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (scroll) {
        scroll.current.scrollTo({ x: (date - 1) * 110 });
      }
    }, [date]),
  );

  const handlePress = <T extends GestureResponderEvent>(month: number) => {
    setDate(month);
  };

  const monthName = months.find((ele) => ele.id === date);

  return (
    <View style={historyScreenStyles.container}>
      <View style={historyScreenStyles.marginTop}>
        <ScrollView ref={scroll} horizontal style={historyScreenStyles.row}>
          {months.map((month, index) => {
            return (
              <ArchiveButton
                onPress={(e) => handlePress(e)}
                title={month.title}
                id={month.id}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      <Card>
        <Text style={historyScreenStyles.headerText}>{monthName?.title}</Text>
      </Card>
      <FuellingHistory filterBy={date} />
    </View>
  );
};

export default ArchiveScreen;
