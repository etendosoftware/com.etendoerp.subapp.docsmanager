import { StyleSheet, Dimensions } from 'react-native';
import { NEUTRAL_0, NEUTRAL_100, TRANSPARENT_NEUTRAL_30 } from '../../styles/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NEUTRAL_0,
  },
  fileContainer: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  fileName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: NEUTRAL_100,
  },
  pdf: {
    flex: 1,
    width: width - 32,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: width - 32,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  audioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    marginBottom: 16,
  },
  textContent: {
    fontSize: 16,
    color: NEUTRAL_100,
  },
  unsupportedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unsupportedText: {
    fontSize: 18,
    color: TRANSPARENT_NEUTRAL_30,
  },
  noFileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFileText: {
    fontSize: 18,
    color: TRANSPARENT_NEUTRAL_30,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: NEUTRAL_0,
    borderBottomWidth: 1,
  },
  fileItemText: {
    fontSize: 16,
    color: TRANSPARENT_NEUTRAL_30,
  },
  fileItemIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  header: {
    height: 60,
    backgroundColor: NEUTRAL_0,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomColor: TRANSPARENT_NEUTRAL_30,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: NEUTRAL_100,
  },
});
