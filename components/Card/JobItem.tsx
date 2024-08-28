import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function JobItem() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <Link
      href={{
        pathname: "/job-detail/[id]",
        params: { id: 1 }
      }}>
      <View className="flex flex-col bg-white rounded-xl p-5 hover:bg-slate-300">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <View className="rounded-full h-10 w-10 bg-gray-500"></View>
            <View className="flex flex-col ml-2">
              <Text className="text-[#150B3D] font-bold">Product Designer</Text>
              <Text className="text-[#524B6B] text-12">Google inc . California, USA</Text>
            </View>
          </View>
          <Pressable onPress={() => setIsBookmarked(!isBookmarked)}>
            <View className="rounded-full px-2">
              {isBookmarked
                ? <FontAwesome name="bookmark" size={24} color="#e6f330" />
                : <FontAwesome5 name="bookmark" size={24} color="#706e6e" />
              }
            </View>
          </Pressable>
        </View>


        <View className="flex flex-row mt-2">
          <Text className="text-13">Application term until</Text>
          <Text className="text-13 font-bold"> 20/12/2024</Text>
        </View>

        <View className="flex flex-row gap-2 mt-2">
          <View className="py-1.5 px-4 rounded-lg bg-gray-200">
            <Text className="text-10">Senior designer</Text>
          </View>
          <View className="py-1.5 px-4 rounded-lg bg-gray-200">
            <Text className="text-10">Full time</Text>
          </View>
          <View className="py-1.5 px-4 rounded-lg bg-orange-200">
            <Text className="text-10">2000 - 2500 USD</Text>
          </View>
        </View>
      </View>
    </Link>
  )
}