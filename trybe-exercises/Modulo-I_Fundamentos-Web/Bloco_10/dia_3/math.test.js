const math = require ('./math')
jest.mock ('./math')
test("#subtrair", () => {
  // Aqui testamos se função subtrair

  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(1, 2); 
  
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair(2, 2)).toBe(0);
}); 

test('#multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10)
  math.multiplicar()
  
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar(2, 2)).toBe(10);
})

test( '#somar', () => {

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2); 
  
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2)
  expect(math.somar(2, 2)).toBe(4);

})

test('#dividir', () => {
  math.dividir = jest.fn().mockReturnValue(15)
  math.dividir(2, 5)
  math.dividir(2, 5)

  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir(2, 5)).toBe(15);
  expect(math.dividir).toHaveBeenCalledWith(2, 5)

})

test("#subtrairOrigin", () => {
  // Aqui testamos se função subtrair e restaura função original
  const mockSub = jest.spyOn(math, "subtrair");

  expect(math.subtrair(4,2)).toBe(2)

  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair = jest.fn().mockReturnValue(20);
  math.subtrair(1, 2); 
  
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair(2, 2)).toBe(20);

  math.subtrair.mockRestore();
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();

  expect(math.subtrair(2,2)).toBe(undefined);
}); 
