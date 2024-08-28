import { View, Text } from "react-native";

export default function FindYourJob() {
  return (
    <View>
      <Text className="font-bold text-base mb-3">Find Your Job</Text>
      <View className="flex flex-row gap-5">
        <View className="bg-[#AFECFE] flex flex-1 justify-center items-center py-4 rounded-lg">
          <Text className="text-[#0D0140] font-bold text-lg">44.5k</Text>
          <Text className="text-[#0D0140]">Remote Job</Text>
        </View>

        <View className="flex flex-col flex-1">
          <View className="bg-[#BEAFFE] flex justify-center items-center py-4 rounded-lg">
            <Text className="text-[#0D0140] font-bold text-lg">66.8k</Text>
            <Text className="text-[#0D0140]">Full Time</Text>
          </View>
          <View className="bg-[#FFD6AD] flex justify-center items-center py-4 rounded-lg mt-5">
            <Text className="text-[#0D0140] font-bold text-lg">38.9k</Text>
            <Text className="text-[#0D0140]">Part Time</Text>
          </View>

        </View>
      </View>
    </View>
  );
}