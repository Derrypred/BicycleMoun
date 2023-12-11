import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Discover, Bookmark, Category, Blogdetail, FAQ, AddCategoryForm, EditCategoryForm } from '../screens';
import { Home2, LocationDiscover, Receipt21, MessageQuestion, Category2 } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';
import { CategoryList } from '../../data';
import { Searchbar } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.grey(),
                tabBarInactiveTintColor: colors.white(),
                tabBarStyle: {
                    backgroundColor: colors.black(),
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 60,
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: fontType['Pjs-Medium'],
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Home2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ focused, color }) => (
                        <LocationDiscover
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
                options={{
                    tabBarLabel: 'Bookmark',
                    tabBarIcon: ({ focused, color }) => (
                        <Receipt21
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ focused, color }) => (
                        <Category2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="FAQ"
                component={FAQ}
                options={{
                    tabBarLabel: 'FAQ',
                    tabBarIcon: ({ focused, color }) => (
                        <MessageQuestion
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Blogdetail"
                component={Blogdetail}
                options={{
                    headerShown: false,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="AddCategoryForm"
                component={AddCategoryForm}
                options={{
                    headerShown: false,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="EditCategory"
                component={EditCategoryForm}
                options={{
                    headerShown: false,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
        </Stack.Navigator>
    );
};
export default Router;