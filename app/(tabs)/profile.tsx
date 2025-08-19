import { PlantlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { Text, View, StyleSheet,Button } from "react-native";

export default function ProfileScreen() {
  const toggleHasOnboarded=useUserStore((store)=>store.toggleHadOnboarded)

  return (
    <View style={styles.container}>
      <PlantlyButton title="back to onboarding " onPress={toggleHasOnboarded}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
