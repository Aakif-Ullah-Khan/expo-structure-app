import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import PrimaryBtn from "@/components/ui/primaryBtn";
import Arrow from "@/assets/icon/ArrowIcon";
import SuggestedPrompt from "@/components/ui/SuggestedPrompt";
import ExerciseCard from "@/components/ui/ExerciseCard";
import ExerciseInfo from "@/components/ui/ExerciseInfo";

const Addyourownmealrecipes = () => {
  return (
    <View className="w-full h-full bg-background ">
      <ScrollView>
        <View className="border bg-[#1A1A1A] rounded-lg m-4 p-3 text-textPrimary h-[28.52vh] flex justify-center items-center">
          <Text className="text-textPrimary">Camera</Text>
          <Text className="text-textPrimary">Add Photo</Text>
        </View>
        <View className="flex-col gap-5">
          <View className="mx-4 flex-col gap-1 ">
            <Text className="text-textPrimary">Add your meal name</Text>
            <TextInput
              className="border border-[#363636] rounded-lg p-3 text-textPrimary h-[48px] "
              placeholder="Burger"
              placeholderTextColor="#888888" // Change placeholder color here
              textAlignVertical="top" // Ensures text starts from the top
            />
          </View>
          <View className="mx-4 flex-col gap-1">
            <Text className="text-textPrimary">
              Add your own meal recipes with full customization and nutritional
              details.
            </Text>
            <TextInput
              className="border border-[#363636] rounded-lg p-3 text-textPrimary h-[104px]"
              placeholder="type here"
              placeholderTextColor="#888888" // Change placeholder color here
              multiline={true}
              textAlignVertical="top" // Ensures text starts from the top
            />
          </View>
        </View>

        {/* Primary Button */}
        <PrimaryBtn
          btnText="Add"
          onPress={() => {
            console.log("Button Pressed!");
          }}
          customStyles="bg-primary py-4 mx-4 rounded-lg mt-10"
        />
      </ScrollView>
    </View>
  );
};

export default Addyourownmealrecipes;
