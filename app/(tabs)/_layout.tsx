import { Redirect, Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { theme } from "@/theme";

const hasFinishedOnboarding=true;

export default function Layout() {
  if(!hasFinishedOnboarding){
    return <Redirect href="/onboarding"/>
  }
  return (
  <Tabs screenOptions={{tabBarActiveTintColor:theme.Green}}>
    <Tabs.Screen name="index" options={{
        title:"Home",
        tabBarShowLabel:false,
        tabBarIcon:({size,color})=><Entypo name="leaf" size={size}  color={color} />
        }}></Tabs.Screen>
   <Tabs.Screen name="profile" options={{
    title:"Profile",
     tabBarShowLabel:false,
    tabBarIcon:({size,color})=><Feather name="user" size={size} color={color} />
    }}></Tabs.Screen>

  </Tabs>
  );
}
