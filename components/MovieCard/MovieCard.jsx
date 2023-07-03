import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons, COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-gesture-handler";

import styles from "./moviecard.style";
import tw from "twrnc";
//style={tw`text-white flex-1 items-center justify-center`}
const MovieCard = ({ movie }) => {
  return (
    <TouchableOpacity className=" flex-1 items-center justify-center">
      <View>
        <Text className="text-white">{movie.Year}</Text>
      </View>
      <TouchableOpacity>
        <Image
          className="h-[460px] w-[310px]"
          source={{
            uri:
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400",
          }}
          alt={movie.Title}
        />
      </TouchableOpacity>
      <View>
        <Text className="text-white">{movie.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
