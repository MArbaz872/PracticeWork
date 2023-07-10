import React from "react";
import ProfileScreen from "./profilescreen";
import StatisticScreen from "./statisticAnalysisScreen";
import NotificationScreen from "./support";
import EditProfileScreen from "./editprofile";
import MainTabScreen from "./maintabscreen";
import DrawerContent from "./drawercontent";
import LearningResourcesStack from "./learningresources";
import { createDrawerNavigator } from "@react-navigation/drawer";
function DrawerNavigationScreen() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Main" component={MainTabScreen} />
            <Drawer.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Statistics"
                component={StatisticScreen}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="Resource"
                component={LearningResourcesStack}
                options={{ headerShown: true }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigationScreen;
