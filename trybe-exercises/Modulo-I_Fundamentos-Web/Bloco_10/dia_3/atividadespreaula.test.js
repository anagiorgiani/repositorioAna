const service = require('../dia_3/atividadespreaula');


test("#randomRgbColor", () => {
    // testando se a função foi chamada e qual seu retorno
    service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
  });


//  const math = require('./math');
//   jest.mock("./math");
  
//   test("#somar", () => {
//     // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  
//     math.somar.mockImplementation((a, b) => a + b);
//     math.somar(1, 2);
  
//     expect(math.somar).toHaveBeenCalled();
//     expect(math.somar).toHaveBeenCalledTimes(1);
//     expect(math.somar).toHaveBeenCalledWith(1, 2);
//     expect(math.somar(1, 2)).toBe(3);
//   });