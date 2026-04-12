package Temp.Temp2;

public class TakeOutOrderFactory implements IOrderFactory {
  public IOrder createOrderFactory(){
    return new TakeOutOrder();
  }
}
