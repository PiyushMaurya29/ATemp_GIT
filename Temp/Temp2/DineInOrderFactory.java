package Temp.Temp2;

class DineInOrderFactory implements IOrderFactory{
  public IOrder createOrderFactory(){
    return new DineInOrder();
  }
}