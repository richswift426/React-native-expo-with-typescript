import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    title: "Funky Falafel Bowl",
    price: 9.0,
    count: 2,
  },
  {
    title: "Cheese Spatizie",
    price: 6.0,
    count: 1,
  },
  {
    title: "Klassiche Kasespatzle",
    price: 9.0,
    count: 2,
  },
];

const CartList = () => {
  type ItemProps = { title: string; price: number; count: number };

  const Item = ({ title, price, count }: ItemProps) => (
    <View style={styles.item}>
      <Image
        source={require("../../assets/images/image1.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.price}>
          {price}
          {"\u20AC"}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.lbutton}>
          <View>
            <FontAwesome name="minus" size={15} />
          </View>
        </TouchableOpacity>
        <View style={styles.middle}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.rbutton}>
          <View>
            <FontAwesome name="plus" size={15} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Item
                title={item.title}
                price={item.price}
                count={item.count}
              ></Item>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    // marginLeft: 20,
  },
  item: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fffffe",
  },
  content: { marginLeft: 30 },
  title: {
    color: "grey",
    fontSize: 12,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttons: {
    marginLeft: "auto",
    borderRadius: 5,
    borderColor: "#b3b3b3",
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fffffe",
    padding: 5,
  },
  lbutton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  rbutton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  middle: {
    marginHorizontal: 10,
  },
});

export default CartList;
