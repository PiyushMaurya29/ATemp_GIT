package Temp.Temp2;

public class Main {
  public static void main(String[] args) {
    IOrderFactory factory = new DineInOrderFactory();

    IOrder order = factory.createOrderFactory();

    order.createOrder();
    
  }
}
