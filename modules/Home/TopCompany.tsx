import { View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (

    <View className="flex flex-col bg-primary-900 rounded-xl my-4">
      <Image
        source={{ uri: 'https://images.vietnamworks.com/logo/chailease_hrbn24_127654.jpg' }}
        className="w-full h-32 bg-gray-500 rounded-t-xl" />

      <View className="flex flex-row px-2 my-3">
        <Image source={{ uri: 'https://images.vietnamworks.com/logo/chaileaseS_vip_126441.jpg' }} className="rounded-lg h-12 w-12" />

        <View className="flex flex-col ml-2">
          <Text className="text-white">Empower your future with us</Text>
          <Text className="text-gray-300 mt-1.5">CHAILEASE</Text>
        </View>
      </View>
    </View>

  );
}