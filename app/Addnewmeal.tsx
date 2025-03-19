import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AddIcon from "@/assets/icon/AddIcon";
import WorkoutCard from "@/components/ui/WorkoutCard";
import CategoryButton from "@/components/ui/CategoryButton ";
import PopularWorkouts from "@/components/ui/PopularWorkouts";
import ClockIcon from "@/assets/icon/ClockIcon";
import RunningIcon from "@/assets/icon/RunningIcon";
import BreakfastIcon from "@/assets/icon/BreakfastIcon";
import LunchIcon from "@/assets/icon/LunchIcon";
import PrimaryBtn from "@/components/ui/primaryBtn";

const Addnewmeal = () => {
  return (
    <View className="w-full h-full bg-background">
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Search Bar */}
        <TextInput
          className="border border-bgTimerbtn text-textPrimary rounded-lg p-4 mx-4 mt-4"
          placeholder="Search exercises..."
          placeholderTextColor="#888888"
        />

        {/* Category Section (Horizontally Scrollable) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mx-4 mt-4"
        >
          <View className="flex flex-row gap-2">
            <CategoryButton title="All" />
            <CategoryButton title="Breakfast" icon={<BreakfastIcon />} />
            <CategoryButton title="Lunch" icon={<LunchIcon />} />
          </View>
        </ScrollView>
        <View className="flex flex-col gap-2 mx-4 mt-4">
          <View className="flex-col gap-4">
            <View className="flex-row justify-center items-center gap-3">
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d515/fa23/2c7b6bd7e2e87b353097e88fa3e1fe29?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WrfIg-SgyK61A9ILiL2Quw71Deaszrxyih7KXKFZ6UTK424RObodElL1TDjsZEUgg9VSF-nCaStwiI5FcNnhwdMoYfGlPJtJ7vM5isIRPEjAjjMo0elF4tK6eLWt9-oDD0CA8rTCsOexFCG1mHAXfX~2O3nOmbOLfzNdbO0PUlq7Nfbj8wxNaAaxrwxZn5pcMZ59zamqoiA4PDSFD8W9L7jgLXEGZasgwEc1C9YdRSmguMPTkCk2GWjl4a9RnR-RuSyxvhRWvm2fA0HdbQuwo8YNFAW-WM8gMdhTgzby5Areuf8FC85hkBXj9xGqJjtPVizAJO3oOoClTOsK3s0dUA__",
                }}
                style={{ width: 96, height: 81, borderRadius: 10 }}
              />
              <View className="flex-col gap-1">
                <Text className="text-white font-bold">
                  Grilled Chicken Salad
                </Text>
                <View className="flex-row gap-2">
                  <Text className="text-fifthTextColor">04 pm</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-fifthTextColor">5 Daily</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-primary">250 Kcal</Text>
                </View>
              </View>
              <AddIcon />
            </View>
            <View className="w-full h-[1px] rounded-lg bg-[#1A1A1A]"></View>
            <View className="flex-row justify-center items-center gap-3">
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d515/fa23/2c7b6bd7e2e87b353097e88fa3e1fe29?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WrfIg-SgyK61A9ILiL2Quw71Deaszrxyih7KXKFZ6UTK424RObodElL1TDjsZEUgg9VSF-nCaStwiI5FcNnhwdMoYfGlPJtJ7vM5isIRPEjAjjMo0elF4tK6eLWt9-oDD0CA8rTCsOexFCG1mHAXfX~2O3nOmbOLfzNdbO0PUlq7Nfbj8wxNaAaxrwxZn5pcMZ59zamqoiA4PDSFD8W9L7jgLXEGZasgwEc1C9YdRSmguMPTkCk2GWjl4a9RnR-RuSyxvhRWvm2fA0HdbQuwo8YNFAW-WM8gMdhTgzby5Areuf8FC85hkBXj9xGqJjtPVizAJO3oOoClTOsK3s0dUA__",
                }}
                style={{ width: 96, height: 81, borderRadius: 10 }}
              />
              <View className="flex-col gap-1">
                <Text className="text-white font-bold">
                  Grilled Chicken Salad
                </Text>
                <View className="flex-row gap-2">
                  <Text className="text-fifthTextColor">04 pm</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-fifthTextColor">5 Daily</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-primary">250 Kcal</Text>
                </View>
              </View>
              <AddIcon />
            </View>
            <View className="w-full h-[1px] rounded-lg bg-[#1A1A1A]"></View>
            <View className="flex-row justify-center items-center gap-3">
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d515/fa23/2c7b6bd7e2e87b353097e88fa3e1fe29?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WrfIg-SgyK61A9ILiL2Quw71Deaszrxyih7KXKFZ6UTK424RObodElL1TDjsZEUgg9VSF-nCaStwiI5FcNnhwdMoYfGlPJtJ7vM5isIRPEjAjjMo0elF4tK6eLWt9-oDD0CA8rTCsOexFCG1mHAXfX~2O3nOmbOLfzNdbO0PUlq7Nfbj8wxNaAaxrwxZn5pcMZ59zamqoiA4PDSFD8W9L7jgLXEGZasgwEc1C9YdRSmguMPTkCk2GWjl4a9RnR-RuSyxvhRWvm2fA0HdbQuwo8YNFAW-WM8gMdhTgzby5Areuf8FC85hkBXj9xGqJjtPVizAJO3oOoClTOsK3s0dUA__",
                }}
                style={{ width: 96, height: 81, borderRadius: 10 }}
              />
              <View className="flex-col gap-1">
                <Text className="text-white font-bold">
                  Grilled Chicken Salad
                </Text>
                <View className="flex-row gap-2">
                  <Text className="text-fifthTextColor">04 pm</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-fifthTextColor">5 Daily</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-primary">250 Kcal</Text>
                </View>
              </View>
              <AddIcon />
            </View>
            <View className="w-full h-[1px] rounded-lg bg-[#1A1A1A]"></View>
            <View className="flex-row justify-center items-center gap-3">
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d515/fa23/2c7b6bd7e2e87b353097e88fa3e1fe29?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WrfIg-SgyK61A9ILiL2Quw71Deaszrxyih7KXKFZ6UTK424RObodElL1TDjsZEUgg9VSF-nCaStwiI5FcNnhwdMoYfGlPJtJ7vM5isIRPEjAjjMo0elF4tK6eLWt9-oDD0CA8rTCsOexFCG1mHAXfX~2O3nOmbOLfzNdbO0PUlq7Nfbj8wxNaAaxrwxZn5pcMZ59zamqoiA4PDSFD8W9L7jgLXEGZasgwEc1C9YdRSmguMPTkCk2GWjl4a9RnR-RuSyxvhRWvm2fA0HdbQuwo8YNFAW-WM8gMdhTgzby5Areuf8FC85hkBXj9xGqJjtPVizAJO3oOoClTOsK3s0dUA__",
                }}
                style={{ width: 96, height: 81, borderRadius: 10 }}
              />
              <View className="flex-col gap-1">
                <Text className="text-white font-bold">
                  Grilled Chicken Salad
                </Text>
                <View className="flex-row gap-2">
                  <Text className="text-fifthTextColor">04 pm</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-fifthTextColor">5 Daily</Text>
                  <Text className="text-fifthTextColor">•</Text>
                  <Text className="text-primary">250 Kcal</Text>
                </View>
              </View>
              <AddIcon />
            </View>
          </View>
          <View className="w-full h-[1px] rounded-lg bg-[#1A1A1A]"></View>
        </View>
        <PrimaryBtn
          onPress={() => {
            // router.push("/workouts/(edit)/CreateWorkoutPlan");
          }}
          btnText="Create Custom Recipe"
          customStyles="bg-primary/30 py-4 rounded-lg flex-1 mt-5 mx-4"
          whiteText="text-textPrimary"
          iconDirection="left"
        />
        <PrimaryBtn
          onPress={() => {
            // router.push("/workouts/(edit)/CreateWorkoutPlan");
          }}
          btnText="Make your meal with AI   "
          customStyles="bg-primary/30 py-4 rounded-lg flex-1 mt-5 mx-4"
          whiteText="text-textPrimary"
          iconDirection="left"
        />
        <View className="h-20"></View>
      </ScrollView>
    </View>
  );
};

export default Addnewmeal;
