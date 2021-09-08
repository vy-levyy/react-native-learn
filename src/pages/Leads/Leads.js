import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Lead} from './../../components/Lead/Lead';
import {leads} from './const';
import {theme} from '../../assets/theme';

const renderItem = ({item}) => {
  return <Lead style={styles.lead} lead={item} />;
};

export const Leads = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.row1}>
          <View>
            <Text style={styles.title}>Leads</Text>
          </View>
          <View>
            <View style={styles.searcher}>
              <Image
                style={styles.searcherImg}
                source={require('../../assets/images/magnifiying-glass.png')}
              />
            </View>
          </View>
        </View>

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
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingHorizontal: 18,
    flex: 1,
  },
  header: {
    // position: 'absolute',
    // top: 30,
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
    marginTop: 32,
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
    // height: Dimensions.get('window').height - 269,
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
    // bottom: 0,
    backgroundColor: theme.colors.primary,
  },
  addButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 40,
  },
  addButtonText: {
    fontSize: 45,
    lineHeight: 50,
    color: 'white',
    fontWeight: '300',
  },
});
