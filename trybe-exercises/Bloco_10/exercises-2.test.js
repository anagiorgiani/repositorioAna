const exercises = require('./exercises-2');
jest.mock('./exercises-2');

test("#palavra", () => { 

    exercises.palavra.mockImplementation((str) =>  str.toLowerCase())
    exercises.palavra('ana');
    expect(exercises.palavra('ana')).toBe('ana');
    expect(exercises.palavra).toHaveBeenCalledTimes(2)

})


test("#letra", () => {
    exercises.letra.mockImplementation((str) =>  (str.charAt(0).toLowerCase() + str.substr(1)))
    exercises.letra('ana');
    expect(exercises.letra('Ana')).toBe('ana');
    expect(exercises.letra).toHaveBeenCalledTimes(2)
})

test("#concatena", () => {
    exercises.concatena.mockImplementation((str1, str2, str3) =>  (str1 + str2 + str3))
    exercises.concatena('ana', 'ama', 'daniel');
    expect(exercises.concatena('ana', 'ama', 'daniel')).toBe('anaamadaniel');
    expect(exercises.concatena).toHaveBeenCalledTimes(2)
})

test("#palavra", () => { 

    //  const mockSub = jest.spyOn(exercises, "palavra");
    exercises.palavra.mockImplementation((str) =>  str.toLowerCase())

    expect(exercises.palavra('ANA')).toBe('ana')
    expect(exercises.palavra).toHaveBeenCalled();
    expect(exercises.palavra).toHaveBeenCalledTimes(3)
    expect(exercises.palavra).toHaveBeenCalledWith('ANA')

    exercises.palavra.mockRestore();
    const mockSub = jest.spyOn(exercises, "palavra");
    
    expect(exercises.palavra('ana')).toBe('ANA');
  
  }); 
 

