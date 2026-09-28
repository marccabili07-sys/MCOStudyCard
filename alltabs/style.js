
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
    backgroundColor: "#108de0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
    buttonstylesignin: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },


  Navigationstyle: {
    flex: 1,
    backgroundColor: "#612f2f",
    
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
  },





    input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "bold" },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: { fontSize: 16 },
  itemDone: { textDecorationLine: "line-through", color: "gray" },
  deleteBtn: { fontSize: 18, color: "red" },































    safe: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  screen: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  topBar: {
    height: 90,
    paddingHorizontal: 46,
    paddingVertical: 12,
    paddingTop: Platform.OS === "ios" ? 18 : 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topActions: {
    alignItems: "Right",
    flexDirection: "row",
    gap: 14,
  },
  circleButton: {
    width: 74,
    height: 74,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#aabada",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.025,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  scrollContent: {
    paddingHorizontal: 45,
    paddingBottom: 40,
  },
  deckHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 34,
    marginBottom: 28,
  },
  aquaSquare: {
    width: 49,
    height: 49,
    borderRadius: 13,
    backgroundColor: "#00d254",
    marginRight: 25,
  },
  deckTitle: {
    fontSize: 30,
    lineHeight: 44,
    fontWeight: "800",
    letterSpacing: -1.2,
    color: "#111a2f",
  },
  authorPill: {
    alignSelf: "flex-start",
    minHeight: 70,
    paddingLeft: 22,
    paddingRight: 30,
    borderRadius: 44,
    borderWidth: 1.5,
    borderColor: "#416193",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarEmoji: {
    fontSize: 25,
  },
  byText: {
    fontSize: 25,
    color: "#68748a",
    fontWeight: "600",
  },
  authorName: {
    fontSize: 27,
    color: "#172039",
    fontWeight: "800",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 3,
  },
  activeTab: {
    paddingVertical: 12,
    paddingHorizontal: 3,
  },
  activeTabText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#151e33",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#68758d",
  },
  divider: {
    height: 1,
    backgroundColor: "#e4e8ed",
    marginTop: 30,
    marginBottom: 49,
  },
  cardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  cardsTitle: {
    fontSize: 29,
    fontWeight: "800",
    color: "#131c31",
  },
  card: {
    minHeight: 174,
    borderRadius: 42,
    borderWidth: 1.5,
    borderColor: "#e1e5ea",
    backgroundColor: "#fff",
    marginBottom: 27,
    paddingTop: 34,
    paddingBottom: 31,
    paddingLeft: 47,
    paddingRight: 62,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.018,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardText: {
    fontSize: 25,
    lineHeight: 35,
    color: "#19233a",
    fontWeight: "500",
    letterSpacing: -0.25,
  },
  answer: {
    fontWeight: "800",
    color: "#14203a",
  },
  trueAnswer: {
    backgroundColor: "#d9f7e6",
  },
  cardMenu: {
    position: "absolute",
    top: 26,
    right: 25,
  },
  studyButton: {
    position: "absolute",
    left: 45,
    right: 45,
    bottom: 26,
    height: 96,
    borderRadius: 52,
    backgroundColor: "#111a30",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  gamepad: {
    fontSize: 32,
    marginRight: 18,
  },
  studyText: {
    fontSize: 29,
    fontWeight: "800",
    color: "#fff",
  },
});