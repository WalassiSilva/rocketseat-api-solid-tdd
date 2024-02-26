# Node.js App com Jest, TDD e Princípios SOLID

Este projeto é uma aplicação Node.js que segue a metodologia de Desenvolvimento Orientado a Testes (TDD) e adota os princípios SOLID para criar um código mais limpo, modular e de fácil manutenção.

## Requisitos

Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento. Você pode encontrar instruções de instalação em: [Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/sua-app.git
```
Navegue até o diretório do projeto:

```bash
cd sua-app
```
Instale as dependências:
```bash
npm install
```
Executando Testes
Este projeto utiliza Jest para testes. Para executar os testes, utilize o seguinte comando:

```bash
npm test
```
Este comando irá executar todos os testes presentes no diretório __tests__.

## Desenvolvimento
Ao desenvolver novos recursos ou funcionalidades, é altamente recomendado seguir a abordagem de TDD. Para isso, siga estes passos:

Escreva um novo teste para a funcionalidade que você deseja implementar no diretório __tests__.
Execute os testes existentes para garantir que o novo teste falhe.
Implemente a funcionalidade necessária para que o teste passe.
Refatore o código conforme necessário para aderir aos princípios SOLID.
Repita o processo para cada nova funcionalidade ou correção de bugs.
Princípios SOLID
Este projeto adota os princípios SOLID para escrever código limpo e de fácil manutenção. A seguir, uma breve descrição de cada princípio:

S - Single Responsibility Principle (Princípio da Responsabilidade Única): Cada classe deve ter apenas uma razão para mudar.

O - Open/Closed Principle (Princípio Aberto/Fechado): As entidades de software devem ser abertas para extensão, mas fechadas para modificação.

L - Liskov Substitution Principle (Princípio da Substituição de Liskov): Subtipos devem ser substituíveis por seus tipos base.

I - Interface Segregation Principle (Princípio da Segregação de Interfaces): Muitas interfaces específicas são melhores do que uma interface única.

D - Dependency Inversion Principle (Princípio da Inversão de Dependência): Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema (issue) ou enviar um pull request com melhorias ou correções.


[![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)](https://www.javascript.com/)
[![Jest](https://img.shields.io/badge/-Jest-brightgreen)](https://jestjs.io/)


