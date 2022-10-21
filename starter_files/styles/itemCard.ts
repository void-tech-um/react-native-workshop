import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  calories: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  addToCartButton: {
    width: "100%",
    height: "50%",
    backgroundColor: "#28bbd7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  removeFromCartButton: {
    width: "100%",
    height: "50%",
    backgroundColor: "#f69c85",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default styles;
