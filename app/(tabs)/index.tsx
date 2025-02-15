import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = [
  { id: 1, name: 'Pizza', icon: '🍕' },
  { id: 2, name: 'Burger', icon: '🍔' },
  { id: 3, name: 'Sushi', icon: '🍱' },
  { id: 4, name: 'Salad', icon: '🥗' },
  { id: 5, name: 'Dessert', icon: '🍰' },
];

const RESTAURANTS = [
  {
    id: 1,
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800',
    rating: 4.8,
    deliveryTime: '20-30',
    category: 'Italian',
  },
  {
    id: 2,
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800',
    rating: 4.5,
    deliveryTime: '15-25',
    category: 'American',
  },
  {
    id: 3,
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
    rating: 4.9,
    deliveryTime: '25-35',
    category: 'Japanese',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John! 👋</Text>
          <Text style={styles.location}>
            <Ionicons name="location" size={16} color="#FF4B3E" />
            New York, NY
          </Text>
        </View>
        <Pressable style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#FF4B3E" />
        </Pressable>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#8E8E93" />
        <Text style={styles.searchText}>Search for restaurants or dishes</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <Pressable key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Restaurants</Text>
        {RESTAURANTS.map((restaurant) => (
          <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`} asChild>
            <Pressable style={styles.restaurantCard}>
              <Image
                source={{ uri: restaurant.image }}
                style={styles.restaurantImage}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.gradient}
              />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.restaurantMeta}>
                  <Text style={styles.restaurantRating}>
                    <Ionicons name="star" size={16} color="#FFD700" />{' '}
                    {restaurant.rating}
                  </Text>
                  <Text style={styles.restaurantDelivery}>
                    {restaurant.deliveryTime} min
                  </Text>
                  <Text style={styles.restaurantCategory}>
                    {restaurant.category}
                  </Text>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  location: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 4,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF0EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchText: {
    marginLeft: 10,
    color: '#8E8E93',
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 25,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 15,
  },
  restaurantCard: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  restaurantInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRating: {
    color: '#fff',
    marginRight: 15,
  },
  restaurantDelivery: {
    color: '#fff',
    marginRight: 15,
  },
  restaurantCategory: {
    color: '#fff',
  },
});