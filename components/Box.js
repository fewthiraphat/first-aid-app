import * as React from 'react';
import { Text, View, StyleSheet , Image , Linking,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
export default function Box() {
  return (
    <View style={styles.body}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.cardrow}>
          <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.pobpad.com/first-aid-%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%99-%E0%B8%8A%E0%B9%88%E0%B8%A7');}}>
            <Image style={styles.logoImage}  source={require('./1.png')}></Image>
            <Text style={styles.textStyle}>บาดเจ็บ</Text>
          </Card>
          <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.bangkokpattayahospital.com/th/healthcare-services/emergency-medical-service-th/emergency-articles-th/item/992-found-unconscious-th.html');}}>
            <Image style={styles.logoImage}  source={require('./2.png')} ></Image>
            <Text style={styles.textStyle}>หมดสติ</Text>
          </Card>
      </View>
      <View style={styles.cardrow2}>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.siphhospital.com/th/news/article/share/662');}}>
          <Image style={styles.logoImage} source={require('./4.png')}></Image>
          <Text style={styles.textStyle}>โดนสัตว์กัด</Text>
        </Card>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.pobpad.com/%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%A5%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B8%81-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2');}}>
          <Image style={styles.logoImage} source={require('./chak.jpg')}></Image>
          <Text style={styles.textStyle} >ชัก</Text>
        </Card>
        </View>
        <View style={styles.cardrow2}>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.rama.mahidol.ac.th/atrama/issue014/varieties-corner');}}>
          <Image style={styles.logoImage} source={require('./5.png')}></Image>
          <Text style={styles.textStyle}>จมน้ำ</Text>
        </Card>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.thaihealth.or.th/Content/41230-%E0%B8%9B%E0%B8%A0.%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%20%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9E%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B9%80%E0%B8%AB%E0%B8%95%E0%B8%B8%E0%B8%9A%E0%B8%99%E0%B8%96%E0%B8%99%E0%B8%99.html');}}>
          <Image style={styles.logoImage} source={require('./6.png')}></Image>
          <Text style={styles.textStyle} >รถชน</Text>
        </Card>
        </View>
        <View style={styles.cardrow2}>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.si.mahidol.ac.th/sidoctor/e-pl/articledetail.asp?id=832');}}>
          <Image style={styles.logoImage} source={require('./boilskin.png')}></Image>
          <Text style={styles.textStyle}>โดนน้ำร้อนลวก</Text>
        </Card>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('https://www.pobpad.com/%E0%B9%84%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%95');}}>
          <Image style={styles.logoImage} source={require('./elec.png')}></Image>
          <Text style={styles.textStyle} >โดนไฟช็อต</Text>
        </Card>
        </View>
        <View style={styles.cardrow2}>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('tel:191');}}>
          <Image style={styles.logoImage} source={require('./police.png')}></Image>
          <Text style={styles.textStyle}>โทรหาตำรวจ</Text>
        </Card>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('tel:1669');}}>
          <Image style={styles.logoImage} source={require('./3.png')}></Image>
          <Text style={styles.textStyle} >โทรหาการแพทย์ฉุกเฉิน</Text>
        </Card>
        </View>
        <View style={styles.cardrow3}>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('tel:1193');}}>
          <Image style={styles.logoImage} source={require('./highwaypolice.png')}></Image>
          <Text style={styles.textStyle}>โทรหาตำรวจทางหลวง</Text>
        </Card>
        <Card style={styles.cardStyle} onPress={()=>{Linking.openURL('tel:1192');}}>
          <Image style={styles.logoImage} source={require('./lostcar.jpg')}></Image>
          <Text style={styles.textStyle} >โทรแจ้งรถหาย</Text>
        </Card>
        </View>
        </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  paragraph: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardrow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  cardrow2:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  cardrow3:{
    marginTop:20,
    paddingBottom:50,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  logoImage:{
    flex:1,
    justifyContent:'center',
    width:150,
    height:25,
  },
  cardStyle:{
    width:150,
    height:150,
  },
  textStyle:{
    textAlign:'center'
  },
  scrollView: {
    alignSelf: "stretch",
    paddingVertical:20,
    paddingHorizontal:3
  },
});