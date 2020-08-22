import React, { useState } from 'react';
import { FlatList, LayoutAnimation, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Toggle } from '../../components';
import { REQUEST_NEWS } from '../../constants/actions';

const HomeScreen = () => {
  const { loading, error, data, offset } = useSelector((state) => state.news);
  const [numberofCols, setNumberofCols] = useState(1);
  const [expandedId, setExpandedId] = useState('');
  const dispatch = useDispatch();

  const onExpand = (id) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'),
    );
    setExpandedId(expandedId === id ? '' : id);
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        expandedId={expandedId}
        onExpand={onExpand}
        isGrid={numberofCols === 2}
      />
    );
  };

  const onEndReached = () => {
    dispatch({ type: REQUEST_NEWS, payload: offset + 10 });
  };

  const onRefresh = () => {
    dispatch({ type: REQUEST_NEWS, payload: 0 });
  };

  const onTogglePress = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
    );
    setNumberofCols(numberofCols === 1 ? 2 : 1);
  };

  const onSidesPress = (numOfCol) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
    );
    setNumberofCols(numOfCol);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, width: '100%' }}>
        <Toggle
          leftLabel={'Comfortable'}
          rightLabel={'Compact'}
          onTogglePress={onTogglePress}
          selectedSide={numberofCols === 1 ? 'left' : 'right'}
          onLeftPress={() => onSidesPress(1)}
          onRightPress={() => onSidesPress(2)}
        />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={loading} />
        }
        style={{ flex: 1, padding: 16 }}
        data={data}
        extraData={expandedId}
        renderItem={renderItem}
        numColumns={numberofCols}
        keyExtractor={(item) => item._id}
        key={numberofCols}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default HomeScreen;
