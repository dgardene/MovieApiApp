import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons, COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-gesture-handler";

import styles from "./moviecard.style";
import tw from "twrnc";
//style={tw`text-white flex-1 items-center justify-center`}
const MovieCard = ({ movie }) => {
  return (
    // <View className=" flex-1 items-center justify-center">
    //   <View>
    //     <Text className="text-white">{movie.Year}</Text>
    //   </View>
    //   <TouchableOpacity>
    //     <Image
    //       className="h-[460px] w-[310px]"
    //       source={{
    //         uri:
    //           movie.Poster !== "N/A"
    //             ? movie.Poster
    //             : "https://via.placeholder.com/400",
    //       }}
    //       alt={movie.Title}
    //     />
    //   </TouchableOpacity>
    //   <View>
    //     <Text className="text-white">{movie.Title}</Text>
    //   </View>
    // </View>
    <View className="flex-1 items-center justify-center p-[20px]">
      <View className="w-[310px] h-[460px] shadow">
        <Image
          className="h-[460px] w-[310px] rounded-[12px]"
          source={{
            uri:
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400",
          }}
          alt={movie.Title}
        />
        <Text className="text-golden text-xl absolute ">{movie.Year}</Text>
        <View className="absolute bottom-0 p-5 bg-[gray] bg-opacity-50 w-[310px] rounded-[12px]">
          <Text className="text-golden text-xl">{movie.Type}</Text>
          <Text className="text-golden text-xl ">{movie.Title}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
