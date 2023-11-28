import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    width: 320,
    height: 170,
    backgroundColor: "rgba(154, 178, 169, 0.5)",
    borderRadius: 15,
    gap: 20,
    marginTop:20,
  },
  local: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  descricao: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
    paddingHorizontal:10
  },
  viewStars: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:10
  },
});
