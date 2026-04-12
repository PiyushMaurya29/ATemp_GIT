package Temp.Temp2;

public class DeliveryOrderFactory implements IOrderFactory {
  public IOrder createOrderFactory(){
    return new DeliveryOrder();
  }
}
