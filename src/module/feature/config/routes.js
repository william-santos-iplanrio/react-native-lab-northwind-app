import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CreateScreen from '../screens/create.screen';
import DeleteScreen from '../screens/delete.screen';
import DetailsScreen from '../screens/details.screen';
import EditScreen from '../screens/edit.screen';
import IndexScreen from '../screens/index.screen';

export default class Navigation extends React.Component {
  render() {
    const Navigator = StackNavigator({
      Index: { 
        screen: IndexScreen, 
        navigationOptions: { 
          title: "Customer's Index",
          headerRight: <Icon name='users' type='feather' />,
          headerStyle: { paddingRight: 10 }
        },        
      },
      Create: { 
        screen: CreateScreen, 
        navigationOptions: { 
          title: "Customer's Create",
          headerRight: <Icon name='user-plus' type='feather' />, 
          headerStyle: { paddingRight: 10 }
        },                
      },
      Delete: { 
        screen: DeleteScreen,
        navigationOptions: { 
          title: "Customer's Delete",
          headerRight: <Icon name='user-minus' type='feather' />,
          headerStyle: { paddingRight: 10 } 
        },                
      },
      Details: {
        screen: DetailsScreen, 
        navigationOptions: { 
          title: "Customer's Details",
          headerRight: <Icon name='user' type='feather' />,
          headerStyle: { paddingRight: 10 } 
        },                
      },
      Edit: { 
        screen: EditScreen, 
        navigationOptions: { 
          title: "Customer's Edit",
          headerRight: <Icon name='user-check' type='feather' />,
          headerStyle: { paddingRight: 10 } 
        },                
      }
    }, {
        initialRouteName: 'Index',
        animationEnabled: false,
        lazyLoad: true,
        swipeEnabled: false,
      });

    return <Navigator />;
  }
}
