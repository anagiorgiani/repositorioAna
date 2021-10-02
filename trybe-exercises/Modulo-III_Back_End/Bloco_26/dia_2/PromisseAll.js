//  Exercicio 5-
//  1-Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
//  2- Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
//  3- Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
//  4-Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

// Importar o módulo fs e criar a função com o Array de strings
const fs = require("fs").promises;


async function arraysStrings() {
  const array = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

	// Utilizar a função map para criar um Array de Promises, cada um criando um arquivo
  const results = array.map((item, index) =>
    fs.writeFile(`./file${index + 1}.txt`, item)
  );

	// Utilizar Promise.all para aguardar a escrita de todos os arquivos
  await Promise.all(results);

  const fileNames = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];

	// Realizar a leitura dos arquivos criados
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, "utf-8"))
  );

	// Concatenar o conteúdo dos arquivos e criar o arquivo novo
  const newFileContent = fileContents.join(" ");

  await fs.writeFile("./fileAll.txt", newFileContent);
}

arraysStrings();
