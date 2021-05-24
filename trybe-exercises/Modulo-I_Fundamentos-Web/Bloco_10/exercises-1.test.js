const exercises = require('./exercises-1');
jest.mock('./exercises-1');

test("#Numeros aleatorios", () => {

exercises.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
exercises.retornaNumeroAleatorio();

expect(exercises.retornaNumeroAleatorio).toHaveBeenCalled()
expect(exercises.retornaNumeroAleatorio()).toBe(10);
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledTimes(2)


exercises.retornaNumeroAleatorio.mockImplementationOnce((a, b) => a / b);
expect(exercises.retornaNumeroAleatorio(10,5)).toBe(2);
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledTimes(3)


exercises.retornaNumeroAleatorio.mockImplementation((a, b, c) => a * b * c );
expect(exercises.retornaNumeroAleatorio(5, 5, 5)).toBe(125);
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledTimes(4);
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledWith(5, 5, 5);


exercises.retornaNumeroAleatorio.mockReset();
exercises.retornaNumeroAleatorio();
exercises.retornaNumeroAleatorio.mockImplementationOnce((a) => a  + a);
expect(exercises.retornaNumeroAleatorio(10)).toBe(20);
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledTimes(2)
expect(exercises.retornaNumeroAleatorio).toHaveBeenCalledWith(10);

});


