import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {ON_PRIMARY_COLOR, PRIMARY_COLOR} from '../helper/Theme';
import {hp, wp} from '../helper/Metric';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Editor from './Editor';

export default function DiscardReasonModal({
  visible,
  callback,
  dismiss,
}: {
  visible: boolean;
  callback: (reason: string) => void;
  dismiss: () => void;
}) {

    const [reason, setDiscardReason] = useState<string>('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onDismiss={dismiss}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
        <View style={styles.header}>

          <Text style={styles.modalTitle}>Discard Article</Text>
          <TouchableOpacity onPress={dismiss}>
          <Ionicon name="close" size={30} color="white" />
          </TouchableOpacity>
          </View>


             <Editor
               callback = {(reason: string)=>{
                callback(reason);
               }}
               />
           
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
   // padding: 14,
    borderRadius: 10,
    marginHorizontal: 4,
    width: '95%',
    height: hp(50),
    justifyContent: 'flex-start',
    // alignItems:"center"
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"red",
    padding: wp(3),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ON_PRIMARY_COLOR,
  },
  text: {
    fontSize: 20,
    //color: 'black',
  },
  modalTitle: {
    fontSize: 18,
    //fontWeight: 'bold',
    fontWeight:"500",
    marginVertical: 3,
    color: 'white',
  },
    modalInput: {
      minHeight: hp(27),
      borderColor: PRIMARY_COLOR,
      borderWidth: 1,
     // backgroundColor:'#B6D0E2',
     alignItems:'flex-start',
     justifyContent:'flex-start',
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      textAlignVertical:'top',
      fontSize:20,
    },
});
