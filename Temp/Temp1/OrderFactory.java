package Temp.Temp1;


class OrderFactory{
  public static IOrder createOrder(String orderType){
    if(orderType.equals("dineInOrder")){
      return new DineInOrder();
    }
    else if(orderType.equals("takeOutOrder")){
      return new TakeOutOrder();
    }
    else if(orderType.equals("deliveryOrder")){
      return new DeliveryOrder();
    }
    else return null;
  }
}