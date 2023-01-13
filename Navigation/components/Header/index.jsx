import React from 'react';
import {Appbar} from 'react-native-paper';
function Header() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header>
     
      <Appbar.Content title="Straight" />
     
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

export default Header;
