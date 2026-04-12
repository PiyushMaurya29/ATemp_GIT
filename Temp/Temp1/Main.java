package Temp.Temp1;

class Main{
  public static void main(String[] args){
    IOrder order = OrderFactory.createOrder("deliveryOrder");

    if(order != null){
      order.createOrder();
    }
  }
}