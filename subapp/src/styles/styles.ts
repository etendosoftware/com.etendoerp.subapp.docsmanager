import { Dimensions, StyleSheet } from "react-native";
import { ETENDO_PRIMARY_DARK, NEUTRAL_0, NEUTRAL_100 } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NEUTRAL_0,
  },
  fileContainer: {
    flex: 1,
    margin: 12,
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    padding: 12,
    elevation: 3,
  },
  fileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: NEUTRAL_100,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 2,
    alignSelf: 'center',
    borderRadius: 8,
  },
  audioContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ETENDO_PRIMARY_DARK,
    padding: 16,
    borderRadius: 30,
    elevation: 2,
  },
  audioButtonText: {
    color: NEUTRAL_0,
    marginLeft: 10,
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
    color: NEUTRAL_100,
  },
  unsupportedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  unsupportedText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  noFileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFileText: {
    fontSize: 18,
    color: NEUTRAL_100,
  },
  fileItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_0,
  },
  fileItemText: {
    fontSize: 16,
  }
});
