import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { usePlantStore } from '@/store/plantsStore';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const plants=usePlantStore((state)=>state.plants);
 

  const router =useRouter();
  return(
    <FlatList
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    data={plants}
    renderItem={({item})=>(
      <PlantCard plant={item}/>
    )}
    ListEmptyComponent={
      <PlantlyButton title='add your first Plant' onPress={()=>{
        router.navigate("/new");
      }}/>
    }
    />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  contentContainer:{
    padding:12,

  }
});
