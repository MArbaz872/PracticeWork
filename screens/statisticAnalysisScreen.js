import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  StackedBarChart,
} from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from 'firebase';




function StatisticScreen({navigation}){
  let [Disease  , setDisease] = useState([0,0,0])
useEffect(()=> {
  const unsubscribe = navigation.addListener('focus', async() => {
  let AllDiseasesArray= [0,0,0]
  firebase
      .firestore()
      .collection("result")
      .where("currentMonth", "==", `${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`)
      .onSnapshot((snapshot)=> {
        snapshot.forEach((documentSnapshot)=> {
          if(documentSnapshot.data().result === "Acne") {
            AllDiseasesArray[0] = AllDiseasesArray[0] + 1
          }
          if(documentSnapshot.data().result === "Eczema") {
            AllDiseasesArray[1] = AllDiseasesArray[1] + 1
          }
          if(documentSnapshot.data().result === "Psoriasis") {
            AllDiseasesArray[2] = AllDiseasesArray[2] + 1
          }
        })
        setDisease(AllDiseasesArray)
      })
    })
    return unsubscribe;
    },[setDisease,navigation])

    //12/2021



    
const MyBezierLineChart = () =>{
  console.log(Disease,"Disease")
  return(
    <View>
      <Text style={styles.header}>Bezier Line Chart for Predicted Diseases</Text>
          <LineChart
            data={{
            labels: ['Acne', 'Eczema', 'Psoraisis'],
            datasets: [
            {
              data: Disease,
              strokeWidth: 2
            },
          ],
          legend: ["Skin Diseases Cases"]
         }}
          width={Dimensions.get("window").width - 16} // from react-native
          height={220}
          yAxisLabel={''}
          chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    </View>
  )
}


const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart for Predicted Diseases</Text>
      <LineChart
        data={{
          labels: ['Acne', 'Eczema', 'Psoraisis',],
          datasets: [
            {
              data: Disease,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};



const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Bar Chart for Predicted Diseases</Text>
      <BarChart
        data={{
          labels: ['Acne', 'Eczema', 'Psoraisis',],
          datasets: [
            {
              data:Disease,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};
const MyStackedBarChart = ({result}) => {
  return (
    <>
      <Text style={styles.header}>Stacked Bar Chart for Predicted Diseases</Text>
      <StackedBarChart
        data={{
          labels: ['Acne', 'Eczema', 'Psoraisis'],
          legend: ['Acne', 'Eczema', 'Psoraisis'],
          data: [
            [60],
            [30],
            [50],
          ],
          barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const MyPieChart = (props) => {

  console.log(props)
  return (
    <>
      <Text style={styles.header}>Pie Chart for Predicted Diseases</Text>
      <PieChart
        data={[
          {
            name: 'Acne',
            population: Disease[0],
            color: '#dfe4ea',//'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 10,
          },
          {
            name: 'Eczema',
            population: Disease[1],
            color: '#ced6e0',
            legendFontColor: '#7F7F7F',
            legendFontSize: 10,
          },
          {
            name: 'Psoriasis',
            population: Disease[2],
            color: '#a4b0be',//'#ffffff',
            legendFontColor: '#7F7F7F',
            legendFontSize: 10,
          }
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

    return(
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <MyBezierLineChart result = {Disease} />
              <MyLineChart result = {Disease}/>
              <MyBarChart result = {Disease}/>
              <MyStackedBarChart result = {Disease}/>
              <MyPieChart />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> 
    ); 
}

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  });