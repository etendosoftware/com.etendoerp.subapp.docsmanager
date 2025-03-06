import { StyleSheet, Dimensions } from 'react-native';
import { NEUTRAL_0, NEUTRAL_10, NEUTRAL_100, NEUTRAL_20 } from '../../styles/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  audioContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  container: {
    backgroundColor: NEUTRAL_0,
    flex: 1,
  },
  fileContainer: {
    flex: 1,
    padding: 16,
  },
  fileItem: {
    alignItems: 'center',
    borderBottomColor: NEUTRAL_20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 16,
  },
  fileItemIcon: {
    height: 24,
    marginRight: 16,
    width: 24,
  },
  fileItemText: {
    color: NEUTRAL_100,
    fontSize: 16,
  },
  fileName: {
    color: NEUTRAL_100,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  goBackButton: {
    marginLeft: 'auto',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: NEUTRAL_10,
    borderBottomColor: NEUTRAL_20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    width: width - 32,
  },
  noFileContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  noFileText: {
    color: NEUTRAL_100,
    fontSize: 18,
  },
  pdf: {
    alignSelf: 'center',
    flex: 1,
    width: width - 32,
  },
  textContainer: {
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    flex: 1,
    marginBottom: 16,
    padding: 16,
  },
  textContent: {
    color: NEUTRAL_100,
    fontSize: 16,
  },
  unsupportedContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  unsupportedText: {
    color: NEUTRAL_100,
    fontSize: 18,
  },
});
