import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Notification, Receipt21, Clock, Message, Receipt1, ReceiptSearch, ReceiptSquare, Component } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';


const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 1 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 1 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://assets-a1.kompasiana.com/items/album/2021/12/24/masya-allah-61c4bbb206310e0f581d9bd2.jpeg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Gunung Bromo
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://pict.sindonews.net/dyn/850/pena/news/2023/09/05/704/1193581/6-fakta-gunung-semeru-puncak-tertinggi-di-jawa-yang-jadi-tempat-kematian-soe-hok-gie-qzw.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Gunung Semeru
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://asset.kompas.com/crops/7-0zX9IZsHSzcZZz3bMTdMZq-oE=/0x0:1200x800/750x500/data/photo/2021/08/19/611e162fed8b4.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Gunung Ijen
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.okezone.com/content/2021/01/21/519/2348711/status-gunung-raung-banyuwangi-naik-ke-level-waspada-8BlwrBD4aY.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Gunung Raung
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://asset.kompas.com/crops/YOQr-qlvLnYqjlQK1HKxw9QAWS0=/0x0:1800x1200/750x500/data/photo/2022/08/20/6300949c5346c.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Gunung Kelud
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ ...category.item, marginLeft: 24 }}>
              <Text style={{ ...category.title, color: colors.blue() }}>
                Beranda
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Merk Sepeda</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Perlengkapan Sepeda</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Aksesoris</Text>
            </View>

            <View style={{ ...category.item, marginRight: 24 }}>
              <Text style={category.title}>Lifestyle</Text>
            </View>
          </ScrollView>
        </View>


        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://www.bikenbike.co.id/wp-content/uploads/2020/08/X-CROSS-YELL.jpeg',
              }}
            />
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.idntimes.com/content-images/post/20200715/mtb-enduro-enduro-mtb-com-63dd64c8882bb3ca765581e5fde21953.jpg',
              }}
            />

          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyrGIGqzCz0e1SjPTmBW3OAR7wled_tPU6Q&usqp=CAU',
              }}
            />

          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i1.wp.com/inreview.id/wp-content/uploads/2019/07/Sepeda-MTB-Polygon-Broadway-3.0.png?fit=1152%2C648&ssl=1',
              }}
            />

          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://magetan.satujam.com/wp-content/uploads/2016/04/mountain_bike_jumping.jpg?strip=all&lossy=1&ssl=1',
              }}
            />

          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://img.id.my-best.com/contents/57443dcd29b2725386ae48b8a14a0436.png?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=adcad31210b258a53d1edfb8922c8544',
              }}
            />

          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://thumb.tvonenews.com/thumbnail/2022/06/18/62adf500f13fe-ilustrasi-downhill_1265_711.jpg',
              }}
            />

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BicycleMount!</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <ListBlog />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 355,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});


const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 390,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 18,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
