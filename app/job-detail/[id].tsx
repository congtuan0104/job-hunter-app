import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <ScrollView className="px-6">
        <Text className="font-bold text-[22px] text-[#0D0140] mt-5">Hello{'\n'}Orlando Diggs.</Text>

        <Text>Job Description</Text>
        <Text>Job ID: {id}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
