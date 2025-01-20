import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  ImageBackground,
  Image,
} from 'react-native';
import {faker} from '@faker-js/faker';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const YoloPayScreen = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [paymentTabSelected, setPaymentTabSelected] = useState(null);
  const [isCvvVisible, setIsCvvVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1)); // Animation value

  const paymentTabs = [
    {label: 'Tab 1', image: require('../assets/Pay.png')},
    {label: 'Tab 2', image: require('../assets/Card.png')},
  ];

  const cardDetails = {
    number: faker.finance.creditCardNumber(),
    expiry: `${faker.date.future().getMonth() + 1}/${String(
      faker.date.future().getFullYear(),
    ).slice(-2)}`,
    cvv: faker.finance.creditCardCVV(),
  };

  const formatCardNumber = cardNumber => {
    return cardNumber
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(\d{4})(?=\d)/g, '$1 '); // Group digits into sets of 4
  };

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    Animated.timing(fadeAnim, {
      toValue: isFrozen ? 1 : 0.3,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleCvvVisibility = () => {
    setIsCvvVisible(!isCvvVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>select payment mode</Text>
      <Text style={styles.subHeaderTitle}>
        choose your preferred payment method to make payment.
      </Text>

      <View style={styles.payTabsView}>
        {paymentTabs.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabsButton,
              paymentTabSelected === index && styles.selectedTab,
            ]}
            onPress={() => {
              setPaymentTabSelected(index);
            }}>
            <Image style={styles.tabImage} source={item.image} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.digitalCardTitle}>YOUR DIGITAL DEBIT CARD</Text>
      <View style={styles.cardContainer}>
        <Animated.View
          style={[
            styles.card,
            isFrozen ? styles.frozenCard : styles.activeCard,
          ]}>
          {isFrozen ? (
            <ImageBackground
              style={styles.imageBackground}
              source={require('../assets/FrozenCardBackground.png')}
            />
          ) : (
            <ImageBackground
              style={styles.imageBackground}
              source={require('../assets/UnfrozenCardBackground.png')}>
              <View style={styles.overlayContent}>
                <View style={styles.cardHeader}>
                  <Image
                    style={styles.logoLeft}
                    source={require('../assets/YoloLogo.png')}
                  />
                  <Image
                    style={styles.logoRight}
                    source={require('../assets/YesBankLogo.png')}
                  />
                </View>
                <View style={styles.cardMiddle}>
                  <View style={styles.cardNumberContainer}>
                    {formatCardNumber(cardDetails.number)
                      .split(' ')
                      .map((line, index) => (
                        <Text key={index} style={styles.cardTextBold}>
                          {line.split('').join(' ')}
                        </Text>
                      ))}
                  </View>
                  <View style={styles.cardDetailsContainer}>
                    <Text style={styles.cardText}>
                      Expiry: {cardDetails.expiry}
                    </Text>
                    <View style={styles.cvvContainer}>
                      <Text style={styles.cardText}>
                        CVV: {isCvvVisible ? cardDetails.cvv : '***'}
                      </Text>
                      <TouchableOpacity onPress={toggleCvvVisibility}>
                        <Image
                          style={styles.eyeIcon}
                          source={
                            isCvvVisible
                              ? require('../assets/Eye_on.jpg')
                              : require('../assets/Eye_off.png')
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.copyDetailsContainer}>
                    <Image
                      style={styles.logoLeft}
                      source={require('../assets/Copy.png')}
                    />
                    <Text style={styles.copyDetailsText}>copy details</Text>
                  </View>
                  <Image
                    style={styles.rupayLogo}
                    source={require('../assets/RupayLogo.png')}
                  />
                </View>
              </View>
            </ImageBackground>
          )}
        </Animated.View>
        <TouchableOpacity style={styles.freezeButton} onPress={toggleFreeze}>
          <View
            style={[styles.circle, {borderColor: isFrozen ? 'red' : 'white'}]}>
            <Image
              style={styles.freezeIcon}
              resizeMode="contain"
              source={
                isFrozen
                  ? require('../assets/Unfreeze.png')
                  : require('../assets/Freeze.png')
              }
            />
          </View>
          <Text style={[styles.freezeText, isFrozen && styles.freezeTextRed]}>
            {isFrozen ? 'unfreeze' : 'freeze'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginTop: '5%',
    marginLeft: '3%',
  },
  subHeaderTitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginTop: '4%',
    color: '#AEAEAE',
    alignSelf: 'flex-start',
    marginLeft: '3%',
  },
  tabImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  payTabsView: {
    flexDirection: 'row',
    marginTop: '15%',
    height: '7%',
    width: '100%',
    gap: '40%',
    paddingLeft: '3%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabsButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    borderColor: 'red',
  },
  tabsText: {
    fontSize: 20,
    color: '#fff',
  },
  digitalCardTitle: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginTop: '12%',
    color: '#696969',
    alignSelf: 'flex-start',
    marginLeft: '3%',
  },
  cardContainer: {
    height: '45%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: '5%',
    alignItems: 'center',
  },
  card: {
    width: '75%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: 'grey',
    borderWidth: 1,
  },
  frozenCard: {
    backgroundColor: '#555',
  },
  activeCard: {
    backgroundColor: '#000',
  },
  imageBackground: {
    flex: 1,
    height: '105%',
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    margin: '6%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLeft: {
    marginLeft: '6%',
  },
  logoRight: {
    marginRight: '6%',
  },
  cardMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '6%',
    marginRight: '6%',
    marginBottom: '10%',
  },
  cardNumberContainer: {
    flex: 1,
  },
  cardDetailsContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardNumber: {
    color: 'white',
    fontSize: 22,
    marginVertical: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  cardTextBold: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    padding: 7,
    marginTop: -5,
    marginLeft: 5,
  },
  cvvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 8,
    width: 24,
    height: 24,
  },
  cardFooter: {
    height: '30%',
    width: '100%',
    justifyContent: 'space-between',
  },
  copyDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5%',
  },
  copyDetailsText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
  },
  rupayLogo: {
    position: 'absolute',
    right: '5%',
    bottom: '15%',
    marginBottom: 5,
  },
  freezeButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  freezeText: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
  freezeTextRed: {
    color: 'red',
  },
  freezeIcon: {
    width: 30,
    height: 30,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 0.5,
  },
});

export default YoloPayScreen;
