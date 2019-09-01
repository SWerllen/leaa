import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Home } from '@leaa/app/src/screens/Home/Home/Home';
import { ArticleList } from '@leaa/app/src/screens/Article/ArticleList/ArticleList';
import { IconFont } from '@leaa/app/src/components/IconFont';

const AppBottomTabbar = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      params: {
        icon: 'x-home',
      },
    },
    ArticleList: {
      screen: ArticleList,
      params: {
        icon: 'x-article',
      },
    },
  },
  {
    // initialRouteName: 'ArticleList',
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }: any) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
        return <IconFont name={navigation.state.params.icon} size={18} style={{ color: tintColor, paddingTop: 5 }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#6a3cff',
      inactiveTintColor: '#aaa',
    },
  },
);

export default createAppContainer(AppBottomTabbar);
