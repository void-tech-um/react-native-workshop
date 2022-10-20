import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  emptyText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  itemCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  buttonParent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  checkoutButton: {
    width: 200,
    height: 50,
    backgroundColor: "#ffef5b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default styles;
