import { 
  Pressable, 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  ScrollView, 
  Text, 
  View, 
  Platform 
} from 'react-native'; // React Native components imports
import Constants from 'expo-constants'; // Variable containing information about the divice
import { AntDesign } from '@expo/vector-icons'; // Icons library import


// Logo variable
const logo = {
  uri: 'https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png',
  height: 25,
  width: 50
}

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.header}>
          <Image source={logo}/>
        </View>
        <View style={styles.card}>
          <Text style={styles.heading1}>Interstellar</Text>
          <View style={[styles.horizontalFlex, styles.verticalMargin]}>
            <Text style={styles.subtext}>2014</Text>
            <Text style={styles.subtext}>PG-13</Text>
            <Text style={styles.subtext}>2h 49min</Text>
            <Text style={styles.subtext}>Adventure, Drama, Sci-Fi</Text>
          </View>
          <View style={[styles.horizontalFlex, styles.verticalMargin]}>
            <Image style={styles.filmCover} source={require("./assets/film.jpg")}/>
            <View style={{flex: 2}}>
              <Text style={styles.paragraph}>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</Text>
              <Pressable style={[styles.horizontalFlex, styles.button]}>
                <AntDesign name="close" size={24} color="#FFFFFF" />
                <Text style={styles.textUppercase}>Add to watchlist</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.horizontalFlex, styles.ratings]}>
            <View style={styles.ratingItem}>
              <AntDesign name="star" size={24} color="#E6B917" />
              <Text style={styles.paragraph}>8.6/10</Text>
              <Text style={styles.subtext}>1.1M</Text>
            </View>
            <View style={styles.ratingItem}>
              <AntDesign name="staro" size={24} color="#FFFFFF" />
              <Text style={styles.textUppercase}>Rate this</Text>
            </View>
            <View style={styles.ratingItem}>
              <Text style={styles.metascore}>74</Text>
              <Text style={styles.paragraph}>Metascore</Text>
              <Text style={styles.subtext}>46 critic review</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.horizontalFlex, styles.spaceBtw, styles.verticalMargin]}>
            <Text style={styles.heading2}>Top Billed Cast</Text>
            <Text style={[styles.textUppercase, styles.imblue]}>See all</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.horizontalFlex, styles.actorsContainer]}>
              <View style={styles.actorCard}>
                <Image style={styles.actorPicture} source={require("./assets/matthew.jpg")} />
                <View style={styles.actorCardBody}>
                  <Text numberOfLines={1} style={styles.paragraph}>Matthew McConaughey</Text>
                  <Text style={styles.subtext}>Cooper</Text>
                </View>
              </View>
              <View style={styles.actorCard}>
                <Image style={styles.actorPicture} source={require("./assets/anne.jpg")} />
                <View style={styles.actorCardBody}>
                  <Text style={styles.paragraph}>Anne Hathaway</Text>
                  <Text style={styles.subtext}>Brand</Text>
                </View>
              </View>
              <View style={styles.actorCard}>
                <Image style={styles.actorPicture} source={require("./assets/jessica.jpg")} />
                <View style={styles.actorCardBody}>
                  <Text style={styles.paragraph}>Jessica Chastain</Text>
                  <Text style={styles.subtext}>Murph</Text>
                </View>
              </View>
              </View>
          </ScrollView>
          <View style={styles.verticalMargin}>
            <Text style={styles.heading3}>Director</Text>
            <Text style={styles.subtext}>Christopher Nolan</Text>
          </View>
          <View>
            <Text style={styles.heading3}>Writers</Text>
            <Text style={styles.subtext}>Jonathan Nolan & Christopher Nolan</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
        marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        backgroundColor: "#191919",
        flex: 1,
  },
  header: {
    backgroundColor: "#393939",
    padding: 10,
    flex: 1,
  },
  card: {
    backgroundColor: "#212121",
    padding: 12,
    marginBottom: 16,
    flex: 1,
  },
  heading1: {
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 4
  },
  heading2: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 4
  },
  heading3: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 4
  },
  paragraph: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  textUppercase: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  imblue: {
    color: "#0177BD",
  },
  button: {
    backgroundColor: "#0177BD",
    paddingVertical: 12,
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  subtext: {
    color: "#A7A7A7",
  },
  horizontalFlex: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  spaceBtw: {
    justifyContent: "space-between",
  },
  ratings: {
    marginTop: 12,
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  ratingItem: {
    alignItems: "center",
    gap: 4,
    width: 120,
  },
  metascore: {
    backgroundColor: "#61C74F",
    color: "#FFFFFF",
    padding: 4,
  },
  verticalMargin: {
    marginBottom: 16,
  },
  filmCover: {
    aspectRatio: "8/12",
    height: 160,
    width: 90,
    flex: 1,
  },
  actorsContainer: {
    alignItems: "flex-start",
    marginBottom: 16,
  },
  actorCard: {
    width: 160,
    backgroundColor: "#2A2A2A",
  },
  actorCardBody: {
    padding: 8,
  },
  actorPicture: {
    width: "100%",
    height: 220,
  }
})
