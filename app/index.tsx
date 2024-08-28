import { Text, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FindYourJob, RecentJobList, TopCompany } from "@/modules/Home";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView className="px-6">
        <StatusBar style="auto" backgroundColor="transparent" />
        <Text className="font-bold text-[22px] text-[#0D0140] mt-5">Hello{'\n'}Orlando Diggs.</Text>

        <View className="mb-4">
          <TopCompany />
          <FindYourJob />
          <RecentJobList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
