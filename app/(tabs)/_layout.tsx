import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  const scheme = useColorScheme();
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: Colors[scheme ?? "light"].background,
        flex: 1,
        padding: 16,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: Platform.OS === "ios" ? 0 : 4,
        },
        tabBarActiveTintColor: Colors[scheme ?? "light"].link,
        tabBarInactiveTintColor: Colors[scheme ?? "light"].text,
        tabBarStyle: {
          backgroundColor: Colors[scheme ?? "light"].card,
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[scheme ?? "light"].card,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "brush" : "brush-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "color-palette" : "color-palette-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused
                  ? "ellipsis-horizontal-circle"
                  : "ellipsis-horizontal-circle-outline"
              }
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
