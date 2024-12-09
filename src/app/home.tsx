
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image} from 'react-native'

import Swiper from 'react-native-swiper'
import styles from '../../assets/style/style-seven'
import { ScrollView } from 'react-native-gesture-handler'


export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay={true} showsPagination={false}>
        <View style={styles.slide1}>
          <Image style={styles.carouselImage} source={require('../../assets/image/poster1.jpeg')}/>
        </View>
        <View style={styles.slide2}>
        <Image style={styles.carouselImage} source={require('../../assets/image/poster2.jpg')}/>
        </View>
        <View style={styles.slide3}>
        <Image style={styles.carouselImage} source={require('../../assets/image/poster3.jpg')}/>
        </View>
      </Swiper>
    )
  }
}


AppRegistry.registerComponent('myproject', () => SwiperComponent)