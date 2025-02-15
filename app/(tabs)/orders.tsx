import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ORDERS = [
  {
    id: 1,
    restaurant: 'Pizza Paradise',
    status: 'Delivered',
    date: '2024-02-20',
    items: ['Margherita Pizza', 'Garlic Bread'],
    total: 25.99,
  },
  {
    id: 2,
    restaurant: 'Burger House',
    status: 'In Progress',
    date: '2024-02-20',
    items: ['Classic Burger', 'Fries', 'Coke'],
    total: 18.50,
  },
  {
    id: 3,
    restaurant: 'Sushi Master',
    status: 'Cancelled',
    date: '2024-02-19',
    items: ['California Roll', 'Miso Soup'],
    total: 32.00,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return '#34C759';
    case 'In Progress':
      return '#FF9500';
    case 'Cancelled':
      return '#FF3B30';
    default:
      return '#8E8E93';
  }
};

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Orders</Text>
      </View>

      <ScrollView style={styles.ordersList}>
        {ORDERS.map((order) => (
          <Pressable key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.restaurantName}>{order.restaurant}</Text>
              <Text
                style={[
                  styles.orderStatus,
                  { color: getStatusColor(order.status) },
                ]}>
                {order.status}
              </Text>
            </View>

            <View style={styles.orderDetails}>
              <Text style={styles.orderDate}>
                <Ionicons name="calendar-outline" size={16} color="#8E8E93" />{' '}
                {order.date}
              </Text>
              <Text style={styles.orderItems}>
                {order.items.join(', ')}
              </Text>
            </View>

            <View style={styles.orderFooter}>
              <Text style={styles.orderTotal}>
                Total: ${order.total.toFixed(2)}
              </Text>
              <Pressable style={styles.reorderButton}>
                <Text style={styles.reorderButtonText}>Reorder</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  ordersList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  orderDetails: {
    marginBottom: 15,
  },
  orderDate: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 5,
  },
  orderItems: {
    fontSize: 14,
    color: '#1C1C1E',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    paddingTop: 15,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  reorderButton: {
    backgroundColor: '#FF4B3E',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  reorderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});