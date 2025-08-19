import {  StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {

  const router=useRouter();

  const toggleHasOnboarded=useUserStore(state=>state.toggleHadOnboarded)

  const handlePress=()=>{
    toggleHasOnboarded();
    router.replace("/")
  }
  return (
    <LinearGradient 
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    colors={[theme.Green,theme.AppleGreen,theme.LimeGreen]}
    style={styles.container}>
      <StatusBar style="light"/>
      <View>
      <Text style={styles.heading}>Plantly</Text>
      <Text style={styles.tagline}>Keep your Plants healthy and hydrated</Text>
      </View>
      <PlantlyImage/>
      <PlantlyButton title="let me in" onPress={handlePress}/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.White,
    padding:8,
  },
  text: {
    fontSize: 24,
  },
  heading:{
    fontSize:42,
    color:theme.White,
    fontWeight:"bold",
    marginBottom:12,
    textAlign:"center",
  },
  tagline:{
    fontSize:24,
    color:theme.White,
    textAlign:"center",
  },
});