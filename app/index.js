import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, images, icons } from "../constants";
import styles from "../constants/Home/home.style";
import ScreenHeaderBtn from "../components/Header/ScreenHeaderBtn";
import Movies from "../components/Movies/Movies";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Stack.Screen
        className="items-center justify-center"
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text className="text-golden text-lg text-center ">
              CinematicAPI
            </Text>
          ),

          headerStyle: { backgroundColor: "#212426" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Movies />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
