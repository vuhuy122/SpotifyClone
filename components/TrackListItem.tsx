import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Track } from "../src/types";

type TrackListItemProps = {
  track: Track;
};
const TrackListItem = ({ track }: TrackListItemProps) => {
  const image = track.album?.images?.[0];
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={() => console.log("Playing track: ", track.id)}
      style={{
        ...styles.container,
        width: width * 0.99,
        paddingRight: "15%",
      }}
    >
      {image && <Image source={{ uri: image.url }} style={styles.image} />}
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
    flex: 1,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
});
export default TrackListItem;
