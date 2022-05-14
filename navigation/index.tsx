/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Doctors from '../screens/Doctors';
import MyVisits from '../screens/MyVisits';
import Covid19 from '../screens/Covid19';
import MyProfile from '../screens/MyProfile';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Doctors"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerBackground: () => <View style={{ backgroundColor: Colors[colorScheme].tint, flex: 1 }} />,
        headerTintColor: Colors[colorScheme].textInvert,
        headerTitleAlign: "center",
        tabBarAllowFontScaling: true,
        headerTitleAllowFontScaling: true,
        headerTitleStyle: { fontWeight: "200" },
      }}>
      <BottomTab.Screen
        name="Doctors"
        component={Doctors}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'Doctors'>) => ({
          title: 'Doctors',
          tabBarIcon: ({ color }) => <TabBarIcon name="doctor" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="MyVisits"
        component={MyVisits}
        options={{
          title: 'My Visits',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-clock" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Covid19"
        component={Covid19}
        options={{
          title: 'COVID-19',
          tabBarIcon: ({ color }) => <TabBarIcon name="injection-syringe" color={color} iconSet="Fontisto" />,
        }}
      />
      <BottomTab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} iconSet="Ionicons" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  iconSet: "FontAwesome"
} | {
  name: React.ComponentProps<typeof Fontisto>['name'];
  color: string;
  iconSet: "Fontisto"
} | {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  iconSet: "Ionicons"
} | {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
  iconSet?: "MaterialCommunityIcons"
}) {
  switch (props.iconSet) {
    case "FontAwesome": {
      return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
    }
    case "Fontisto": {
      return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;
    }
    case "Ionicons": {
      return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
    }
    default: {
      return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
    }
  }
}
