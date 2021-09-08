import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const menuItems = [
  {
    id: '0',
    label: 'Leads',
  },
  {
    id: '1',
    label: 'Content',
  },
  {
    id: '2',
    label: 'Activity',
  },
  {
    id: '3',
    label: 'Settings',
  },
];

export const MenuRow = () => {
  const onMenuItemClicked = useCallback(menuId => {
    console.log('### menuId ->', menuId);
  }, []);

  const menuItemComponents = useMemo(() => {
    console.log('### 111 ->', 111);
    return menuItems.map(menuItem => {
      return (
        <TouchableWithoutFeedback
          style={styles.menuItem}
          onPress={() => onMenuItemClicked(menuItem.id)}
          key={menuItem.id}>
          <View style={styles.button}>
            <View style={styles.icon} />
            <Text style={styles.text}>{menuItem.label}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  }, [onMenuItemClicked]);

  return <View style={styles.menu}>{menuItemComponents}</View>;
};

const styles = StyleSheet.create({
  menu: {
    // position: 'absolute',
    bottom: 0,
    height: 80,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
  },
});
