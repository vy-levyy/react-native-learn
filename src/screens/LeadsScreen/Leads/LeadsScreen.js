import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Lead} from '../../../components/Lead/Lead';
import {leads} from './const';
import {theme} from '../../../assets/theme';

const renderItem = ({item}) => {
  return <Lead style={styles.lead} lead={item} />;
};

export const LeadsScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.filterRow}>
          <View>
            <Text style={styles.leadsTitle}>Your Leads</Text>
          </View>
          <View>
            <Text style={styles.filterTitle}>FILTER</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          style={styles.flatList}
          data={leads}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
      <TouchableOpacity style={styles.addButtonWrap} onPress={() => {}}>
        <View>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.blue1,
  },
  header: {
    paddingHorizontal: 18,
    width: '100%',
    alignSelf: 'center',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  searcher: {
    height: 30,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: theme.colors.gray1,
    backgroundColor: 'white',
  },
  searcherImg: {
    height: 13,
    width: 13,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leadsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.gray2,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  body: {
    marginTop: 20,
    flex: 1,
  },
  lead: {
    marginBottom: 15,
  },
  addButtonWrap: {
    width: 57.5,
    height: 57.5,
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: 25,
    backgroundColor: theme.colors.primary,
  },
  addButtonText: {
    fontSize: 45,
    lineHeight: 50,
    color: 'white',
    fontWeight: '300',
  },
});
