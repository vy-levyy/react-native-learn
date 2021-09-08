import React, {useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import call from 'react-native-phone-call';
import {theme} from '../../assets/theme';

export const Lead = props => {
  const {
    style,
    lead: {title = 'title', tags, timeAgo = 'Time ago'},
  } = props;

  const tagComponents = useMemo(() => {
    return tags.map(tag => {
      return (
        <View style={styles.touchableTagWrap} key={tag.id}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#fff"
            style={styles.touchableTag}
            onPress={() => console.log('### -> tap')}>
            <View
              style={[
                styles.tag,
                tag.type === '1'
                  ? {backgroundColor: theme.colors.secondary}
                  : {},
              ]}>
              <Text style={styles.tagLabel}>{tag.value}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    });
  }, [tags]);

  const onPhonePress = useCallback(() => {
    const args = {
      number: '9093900003',
      prompt: false,
    };

    call(args).catch(console.error);
  }, []);

  return (
    <View style={[styles.lead, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.tags}>{tagComponents}</View>
        <TouchableOpacity onPress={onPhonePress}>
          <View style={styles.phoneIconWrap}>
            <Image
              style={styles.phoneIcon}
              source={require('./../../assets/images/icons8-phone-24.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.timeAgo}>{timeAgo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lead: {
    borderRadius: 15,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft: 17,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderWidth: 1,
    borderColor: theme.colors.gray1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    // marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
  },
  tags: {
    flexDirection: 'row',
    marginHorizontal: -3,
  },
  touchableTagWrap: {
    paddingHorizontal: 3,
  },
  touchableTag: {
    borderRadius: 15,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderRadius: 15,
  },
  tagLabel: {
    color: 'white',
    fontSize: 8,
  },
  phoneIconWrap: {
    backgroundColor: theme.colors.gray3,
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    width: 18,
    height: 18,
  },
  timeAgo: {
    color: theme.colors.blue2,
    fontSize: 16,
  },
});
