import React, { useRef, useState } from 'react';
import { FlatList, LayoutAnimation, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Toggle } from '../../components';
import { REQUEST_NEWS } from '../../constants/actions';

const HomeScreen = ({ navigation }) => {
  const { loading, error, data, offset } = useSelector((state) => state.news);
  const [numberofCols, setNumberofCols] = useState(1);
  const [expandedId, setExpandedId] = useState('');
  const [scrollPosition, setScrollPostion] = useState(0);
  const dispatch = useDispatch();
  const flatlistRef = useRef();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'News',
    });
  }, [navigation]);

  const animate = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
    );
  };

  const onExpand = (id) => {
    animate();
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

  const scrollToPosition = (position) => {
    setTimeout(
      () =>
        flatlistRef.current.scrollToOffset({
          offset: position,
          animated: false,
        }),
      0,
    );
  };

  const onTogglePress = () => {
    animate();
    setNumberofCols(numberofCols === 1 ? 2 : 1);
    scrollToPosition(scrollPosition);
  };

  const onSidesPress = (numOfCol) => {
    animate();
    setNumberofCols(numOfCol);
    scrollToPosition(scrollPosition);
  };

  const onScroll = (e) => {
    setScrollPostion(e.nativeEvent.contentOffset.y);
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
        ref={flatlistRef}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={loading} />
        }
        style={{ flex: 1, padding: 16 }}
        data={data}
        onScroll={onScroll}
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
