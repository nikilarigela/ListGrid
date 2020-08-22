import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatDate } from '../utils';

const ListItem = ({ item, onExpand, expandedId, isGrid }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 10,
        padding: 12,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        flex: 1,
        marginHorizontal: isGrid ? 6 : 0,
      }}>
      <Image
        resizeMode="cover"
        source={{ uri: item.imageUrl }}
        style={{
          height: isGrid ? 120 : 150,
          width: '100%',
          backgroundColor: '#d6d2d2',
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      {isGrid ? (
        <Text
          style={{ fontSize: 16, alignSelf: 'center', color: '#212121' }}
          numberOfLines={1}>
          {formatDate(item.createdAt, 'Do MMM YYYY')}
        </Text>
      ) : (
        <>
          <Text
            style={{ fontSize: 16, fontWeight: '600', color: '#212121' }}
            numberOfLines={2}>
            {item.headline}
          </Text>
          {expandedId === item._id && (
            <Text
              style={{ fontSize: 15, color: '#474747', marginTop: 4 }}
              numberOfLines={3}>
              {item.summary}
            </Text>
          )}
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => onExpand(item._id)}>
            <Text
              style={{ color: '#b0aeae', alignSelf: 'flex-end', marginTop: 6 }}>
              {`View ${expandedId === item._id ? 'Less' : 'More..'}`}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ListItem;
