import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import PrimaryBtn from "@/components/ui/primaryBtn";
import Arrow from "@/assets/icon/ArrowIcon";
import SuggestedPrompt from "@/components/ui/SuggestedPrompt";
import ExerciseCard from "@/components/ui/ExerciseCard";
import ExerciseInfo from "@/components/ui/ExerciseInfo";
import AddIcon from "@/assets/icon/AddIcon";
import ForwardIcon from "@/assets/icon/ForwardIcon";

const aiCustomizationmeal = () => {
  return (
    <View className="w-full h-full bg-background ">
      <ScrollView>
        <View className="flex flex-col ">
          {/* ////////////////////////////////////////// */}
          <View className="p-4">
            {/* Text Area */}
            <TextInput
              className="border bg-[#1A1A1A] rounded-lg p-3 text-textPrimary h-[28.52vh]"
              placeholder="Type your instructions..."
              placeholderTextColor="#888888" // Change placeholder color here
              multiline={true}
              textAlignVertical="top" // Ensures text starts from the top
            />

            {/* Primary Button */}
            <PrimaryBtn
              btnText="Submit"
              onPress={() => {
                console.log("Button Pressed!");
              }}
              customStyles="bg-primary py-4 rounded-lg mt-4"
            />
          </View>
          {/* ////////////////////////////////////////// */}
          <View className="">
            <Text className="text-2xl font-bold px-4 text-textPrimary">
              Suggested Prompts
            </Text>
            <View className="p-4 gap-2 flex rounded-xl">
              <SuggestedPrompt text="Create a meal plan that emphasizes healthy, home-cooked meals." />
              <SuggestedPrompt text="List the key ingredients needed for nutritious home-cooked meals." />
              <SuggestedPrompt text="Suggest recipes that include a variety of proteins, vegetables, and whole grains." />
              <SuggestedPrompt text="Add reminders for hydration and balanced snacks throughout the day." />
            </View>
          </View>
          {/* /////////////////////////////////////////// */}
          <View className="flex flex-col justify-between mx-4 px-4 py-4 rounded-xl gap-5 bg-[#1E1E24] ">
            <Text className="text-2xl font-bold text-textPrimary">
              Suggested per your prompt.
            </Text>
            <View className=" flex flex-col gap-5">
              <View className="flex-row items-center justify-between gap-3">
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/d515/fa23/2c7b6bd7e2e87b353097e88fa3e1fe29?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WrfIg-SgyK61A9ILiL2Quw71Deaszrxyih7KXKFZ6UTK424RObodElL1TDjsZEUgg9VSF-nCaStwiI5FcNnhwdMoYfGlPJtJ7vM5isIRPEjAjjMo0elF4tK6eLWt9-oDD0CA8rTCsOexFCG1mHAXfX~2O3nOmbOLfzNdbO0PUlq7Nfbj8wxNaAaxrwxZn5pcMZ59zamqoiA4PDSFD8W9L7jgLXEGZasgwEc1C9YdRSmguMPTkCk2GWjl4a9RnR-RuSyxvhRWvm2fA0HdbQuwo8YNFAW-WM8gMdhTgzby5Areuf8FC85hkBXj9xGqJjtPVizAJO3oOoClTOsK3s0dUA__",
                  }}
                  style={{ width: 64, height: 64, borderRadius: 10 }}
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
                <ForwardIcon />
              </View>
              <PrimaryBtn
                onPress={() => {}}
                btnText="Apply In your Meal Plan"
                customStyles="bg-primary py-4 rounded-lg "
                whiteText="text-bgSecondary text-[1rem]"
              />
            </View>
          </View>
          <View className="h-20"></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default aiCustomizationmeal;
