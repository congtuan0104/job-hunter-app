import { View, Text, StyleSheet } from "react-native";
import { JobItem } from "@/components";

export default function RecentJobList() {
  return (
    <View className="mt-5">
      <Text className="font-bold text-base">Recent Job List</Text>

      <View style={styles.container}>
        <JobItem />
        <JobItem />
        <JobItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 12,
  }
});

