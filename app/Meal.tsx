import Aiworkouticon from "@/assets/icon/Aiworkouticon";
import Arrow from "@/assets/icon/ArrowIcon";
import EditWorkoutsIcon from "@/assets/icon/EditWorkoutsIcon";
import ForwardIcon from "@/assets/icon/ForwardIcon";
import TickMark from "@/assets/icon/TickMark";
import ExerciseCard from "@/components/ui/ExerciseCard";
import PrimaryBtn from "@/components/ui/primaryBtn";
import { getCurrentDate } from "@/helpers/getDate";
import { useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
// import { Check } from "lucide-react-native";
const index = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded && !isSignedIn) {
      router.replace("/login");
    }
  }, [isSignedIn, isLoaded]);

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 5 - 10; // 10px gap ko adjust karne k liye
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <View className="w-full h-full bg-background ">
      <ScrollView>
        <View className="flex flex-col justify-between gap-2 ">
          {/* profile code  */}
          <View className="flex p-4 flex-row justify-between items-center w-full">
            <View className="flex flex-row justify-center items-center gap-3 ">
              <View className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1738363436272-f191888a398b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View>
                <Text className="text-secondaryTextColor ">
                  {user?.fullName}
                </Text>
                <Text className="text-textPrimary font-stolzl-bold text-[1.125rem] font-[500]">
                  {getCurrentDate({ dayName: true })}
                </Text>
              </View>
            </View>
          </View>

          {/* Dite Plane Code */}
          <View className="px-4">
            <Text className="text-white  text-[28px]">Diet Plan</Text>
            <Text className="text-white">
              Current Diet Plan Burn{" "}
              <Text className="text-primary">1000 Kcal</Text> Every day.
            </Text>
          </View>

          {/* Horizantal Line Code  */}
          <View className="w-full h-[1px] bg-hrLineColor"></View>

          {/* Your Meal code  */}
          <View className="bg-bgGray rounded-xl p-5 flex flex-col gap-[1.5rem] m-4">
            <Text className="text-textPrimary text-2xl font-bold">
              Your Meals
            </Text>
            <View className="flex-col gap-3">
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-center items-center gap-3">
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/41f0/e523/3ec11f346125caeabcf02233f1333099?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWA4-9pmhKJ0lRi9OUIEPOfL0X7CF4rTERzGpLhHQK7SCySzawcpGVGMBPut-K~87a87weN38LZ7oMY6Jca1ERODsLnl8earhXEXn3XXV4ERuAJSu6K20MM8QSrdi6khJr0YGNlkrNCBF8GFNs-V0NXZbA04kMZG6w1UugCZyk-QKLXS0uJN8hzkAwPqQc287MHAr50k4nkiX24vJF2TLaVMLXe~jDXV5wUQDSKAWrmr7y8H3sZZwH8uZT8mMKvBvC563ZX35YP~3suIO5F8BDCkFefnNj6zaEzZo0u4GuSl7jZYb862BEBVSg-juFAIE2cL0m53sAYW5NVQafNaVg__",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 10 }}
                  />
                  <View className="flex-col gap-1">
                    <Text className="text-white">Quinoa Salad Bowl</Text>
                    <View className="flex-row gap-2">
                      <Text className="text-textPrimary">04 pm</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-textPrimary">Daily</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-primary">250 Kcal</Text>
                    </View>
                  </View>
                </View>
                <ForwardIcon />
              </View>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-center items-center gap-3">
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/41f0/e523/3ec11f346125caeabcf02233f1333099?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWA4-9pmhKJ0lRi9OUIEPOfL0X7CF4rTERzGpLhHQK7SCySzawcpGVGMBPut-K~87a87weN38LZ7oMY6Jca1ERODsLnl8earhXEXn3XXV4ERuAJSu6K20MM8QSrdi6khJr0YGNlkrNCBF8GFNs-V0NXZbA04kMZG6w1UugCZyk-QKLXS0uJN8hzkAwPqQc287MHAr50k4nkiX24vJF2TLaVMLXe~jDXV5wUQDSKAWrmr7y8H3sZZwH8uZT8mMKvBvC563ZX35YP~3suIO5F8BDCkFefnNj6zaEzZo0u4GuSl7jZYb862BEBVSg-juFAIE2cL0m53sAYW5NVQafNaVg__",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 10 }}
                  />
                  <View className="flex-col gap-1">
                    <Text className="text-white">Quinoa Salad Bowl</Text>
                    <View className="flex-row gap-2">
                      <Text className="text-textPrimary">04 pm</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-textPrimary">Daily</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-primary">250 Kcal</Text>
                    </View>
                  </View>
                </View>
                <ForwardIcon />
              </View>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-center items-center gap-3">
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/41f0/e523/3ec11f346125caeabcf02233f1333099?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWA4-9pmhKJ0lRi9OUIEPOfL0X7CF4rTERzGpLhHQK7SCySzawcpGVGMBPut-K~87a87weN38LZ7oMY6Jca1ERODsLnl8earhXEXn3XXV4ERuAJSu6K20MM8QSrdi6khJr0YGNlkrNCBF8GFNs-V0NXZbA04kMZG6w1UugCZyk-QKLXS0uJN8hzkAwPqQc287MHAr50k4nkiX24vJF2TLaVMLXe~jDXV5wUQDSKAWrmr7y8H3sZZwH8uZT8mMKvBvC563ZX35YP~3suIO5F8BDCkFefnNj6zaEzZo0u4GuSl7jZYb862BEBVSg-juFAIE2cL0m53sAYW5NVQafNaVg__",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 10 }}
                  />
                  <View className="flex-col gap-1">
                    <Text className="text-white">Quinoa Salad Bowl</Text>
                    <View className="flex-row gap-2">
                      <Text className="text-textPrimary">04 pm</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-textPrimary">Daily</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-primary">250 Kcal</Text>
                    </View>
                  </View>
                </View>
                <ForwardIcon />
              </View>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-center items-center gap-3">
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/41f0/e523/3ec11f346125caeabcf02233f1333099?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWA4-9pmhKJ0lRi9OUIEPOfL0X7CF4rTERzGpLhHQK7SCySzawcpGVGMBPut-K~87a87weN38LZ7oMY6Jca1ERODsLnl8earhXEXn3XXV4ERuAJSu6K20MM8QSrdi6khJr0YGNlkrNCBF8GFNs-V0NXZbA04kMZG6w1UugCZyk-QKLXS0uJN8hzkAwPqQc287MHAr50k4nkiX24vJF2TLaVMLXe~jDXV5wUQDSKAWrmr7y8H3sZZwH8uZT8mMKvBvC563ZX35YP~3suIO5F8BDCkFefnNj6zaEzZo0u4GuSl7jZYb862BEBVSg-juFAIE2cL0m53sAYW5NVQafNaVg__",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 10 }}
                  />
                  <View className="flex-col gap-1">
                    <Text className="text-white">Quinoa Salad Bowl</Text>
                    <View className="flex-row gap-2">
                      <Text className="text-textPrimary">04 pm</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-textPrimary">Daily</Text>
                      <Text className="text-textPrimary">•</Text>
                      <Text className="text-primary">250 Kcal</Text>
                    </View>
                  </View>
                </View>
                <ForwardIcon />
              </View>
            </View>
            <PrimaryBtn
              onPress={() => {}}
              btnText="Add more meal"
              customStyles="bg-bgTimerbtn py-4 rounded-lg w-full"
              whiteText="text-textSecondary   "
              // loading={loading} // Pass the loading state
            />
          </View>

          {/* Edit your workout Button  */}
          <View className="mx-4 ">
            <PrimaryBtn
              onPress={() => {
                // router.push("/workouts/(edit)/CreateWorkoutPlan");
              }}
              btnText="Make your meal with AI."
              customStyles="bg-primary/30 py-4 rounded-lg w-full"
              whiteText="text-textPrimary"
              icon={<Aiworkouticon />}
              iconDirection="left"
              // loading={loading} // Pass the loading state
            />
          </View>
        </View>
        <View className="h-20"></View>
      </ScrollView>
    </View>
  );
};

export default index;
