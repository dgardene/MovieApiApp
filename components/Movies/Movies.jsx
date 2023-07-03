import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import { icons, COLORS, SIZES } from "../../constants";
import { TextInput } from "react-native-gesture-handler";

import styles from "./movies.style";
import searchbar from "../../assets/searchbar/search.svg";
import MovieCard from "../MovieCard/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=25956992";

// const router = useRouter();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Cars");
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput value="" onChangeText="" placeholder="Search Movie" />
        </View>
      </View>
      <View>
        {movies?.map((movie) => (
          <MovieCard
            movie={movie}
            //   key={`nearby-job${job?.job_id}`}
            //   handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
        ))}
      </View>
    </View>
  );
};

export default Movies;
