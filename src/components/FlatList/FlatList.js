import React, {useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';

export function FlatList({children, allowRefresh, onRefresh}) {
  const [refresh, setRefresh] = useState(false);

  const hanldeRefresh = async () => {
    setRefresh(true);
    await onRefresh();
  };

  return (
    <View>
      <FlatList
        refreshControl={
          allowRefresh && (
            <RefreshControl refreshing={refresh} onRefresh={hanldeRefresh} />
          )
        }>
        {children}
      </FlatList>
    </View>
  );
}
