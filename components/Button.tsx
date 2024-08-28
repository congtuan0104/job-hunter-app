import { FontAwesome } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";

interface IButtonProps {
  label: string;
  onPress?: () => void;
}

export default function Button({ label, onPress }: IButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome
          name="picture-o"
          size={18}
          color="#ffffff"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});