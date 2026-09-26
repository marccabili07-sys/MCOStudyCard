
import { StyleSheet } from 'react-native';

export const styleko = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",     
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  buttonstylelogin: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: "#1eaae1",
    borderRadius: 3,
  },
    buttonstylesignin: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: "#24e182",
    borderRadius: 3,
  },
    buttonstyleDashboard: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ee7001",
    borderRadius: 3,
  },

  Navigationstyle: {
    flex: 1,
    backgroundColor: "#612f2f",
    
  },

  card: {
    width: 250,
    height: 300,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    borderRadius: 10,
    padding: 10,
  },
  cardBack: {
    backgroundColor: "#2ecc71",
    position: "absolute",
    top: 0,
  },
  titledashboard: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  preview: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  }
});