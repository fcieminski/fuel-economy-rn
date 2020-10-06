import { StyleSheet } from 'react-native';

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

export const mainScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export const historyScreenStyles = StyleSheet.create({
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
  marginRight: {
    marginRight: 10,
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
  fontMedium,
  dateHighlight: {
    alignSelf: 'flex-end',
    ...fontGray,
    ...fontRegular,
  },
  marginBottom: {
    marginBottom: 5,
  },
});

export const addButtonsStyle = StyleSheet.create({
  buttonContainer: {
    height: 60,
    bottom: 30,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    ...fontBig,
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
});
