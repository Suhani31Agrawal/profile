import React from 'react';
import {createDrawerNavigator} from "react-navigation-drawer";
import {BottomTabNavigator} from "./BottomTabNavigator"
import {CustomSideBarMenu} from "./CustomSideBarMenu"

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:BottomTabNavigator
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
})