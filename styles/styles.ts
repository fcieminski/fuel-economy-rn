import { Dimensions, StyleSheet } from 'react-native';

const fontRegular = {
  fontSize: 16,
};
const fontMedium = {
  fontSize: 18,
};
const fontBig = {
  fontSize: 20,
};
const fontGray = {
  color: '#919191',
};

const deviceWidth = Dimensions.get('window').width;

export const mainScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export const historyScreenStyles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    ...fontMedium,
  },
  container: {
    flex: 1,
  },
  marginTop: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  fontRegular,
  button: {
    backgroundColor: '#32a899',
    width: 110,
    borderRadius: 0,
    borderRightWidth: 1,
    borderColor: '#e3e3e3',
  },
  listContainer: {
    marginBottom: 10,
    flex: 1,
  },
  padding: {
    padding: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
  rowSpace: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontGray,
  divider: {
    marginBottom: 10,
    marginTop: 5,
    paddingTop: 1,
  },
  textMediumMargin: {
    ...fontMedium,
    marginRight: 10,
  },
  dateHighlight: {
    alignSelf: 'flex-end',
    ...fontGray,
    ...fontRegular,
  },
  marginBottom: {
    marginBottom: 5,
  },
});

export const addButtonsStyles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    bottom: 25,
    width: 60,
    borderRadius: 58,
    backgroundColor: '#32a899',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  btn: {
    borderColor: 'white',
    borderWidth: 2,
    width: '100%',
    height: '100%',
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const carStyles = StyleSheet.create({
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    ...fontMedium,
  },
  text: {
    marginBottom: 10,
    ...fontRegular,
  },
  button: {
    backgroundColor: '#32a899',
  },
  fontRegular,
  column: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowSpace: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export const fixListStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    ...fontMedium,
  },
  marginBottom: {
    marginBottom: 5,
  },
  textMediumMargin: {
    ...fontMedium,
    marginRight: 10,
  },
  fontRegular,
  textLabel: {
    ...fontRegular,
    ...fontGray,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    marginBottom: 0,
    paddingBottom: 0,
    alignSelf: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
  },
});

export const listStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    ...fontMedium,
    ...fontGray,
  },
  headerText: {
    fontWeight: 'bold',
    ...fontMedium,
  },
  fontRegular,
  rowSpace: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginRight: {
    marginRight: 10,
  },
});

export const modalStyles = StyleSheet.create({
  modal: {
    width: deviceWidth * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    borderRadius: 100,
    height: 40,
    width: 40,
    marginBottom: -10,
  },
  icon: {
    marginRight: 10,
  },
  modalHeaderText: {
    fontSize: 24,
  },
});

export const notesStyles = StyleSheet.create({
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textImportant: {
    fontWeight: 'bold',
    ...fontMedium,
  },
  modalImage: {
    maxWidth: '100%',
    width: '100%',
    height: '100%',
  },
  content: {
    ...fontRegular,
    marginBottom: 20,
  },
  editNoteContainer: {
    width: deviceWidth * 0.8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#32a899',
  },
  text: {
    ...fontGray,
    ...fontRegular,
  },
});

export const warningModalStyles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 20,
  },
  fontMedium,
});

export const bottomNavigationStyles = StyleSheet.create({
  navigationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navigationContainer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 2,
    borderTopColor: '#32a899',
  },
});
