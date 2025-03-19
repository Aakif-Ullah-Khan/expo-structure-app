import { View, Image, Text } from "react-native";

interface FoodItemProps {
  imageUrl: string;
  title: string;
  time: string;
  frequency: string;
  calories: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  imageUrl,
  title,
  time,
  frequency,
  calories,
}) => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row justify-center items-center gap-3">
        {/* Food Image */}
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 64, height: 64, borderRadius: 10 }}
        />

        {/* Food Details */}
        <View className="flex-col gap-3">
          <Text className="text-white">{title}</Text>
          <View className="flex-row gap-2">
            <Text className="text-textPrimary">{time}</Text>
            <Text className="text-textPrimary">•</Text>
            <Text className="text-textPrimary">{frequency}</Text>
            <Text className="text-textPrimary">•</Text>
            <Text className="text-primary">{calories} Kcal</Text>
          </View>
        </View>
      </View>

      {/* Forward Icon */}
      <View>
        <Text>Icon</Text>
      </View>
    </View>
  );
};

export default FoodItem;
