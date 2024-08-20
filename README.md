# Calculadora
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/gabriel-engelles/calculadora/blob/main/LICENSE)
## Sobre o Projeto
https://gabriel-engelles.github.io/calculadora/<br>
<br>
Este projeto é uma calculadora digital desenvolvida para praticar e demonstrar habilidades em HTML e CSS.<br> 
### Exemplo de Uso
- **Adicionar Números:**
  -  Clique nos botões numéricos para adicionar números ao display.
- **Selecionar Operador:**
  -  Clique em um operador aritmético (+, -, *, /) para preparar a operação.
- **Calcular Resultado:**
  -  Clique no botão de igual (=) para calcular o resultado da operação.
- **Limpar Display:**
  -  Clique no botão "Clear" para resetar a calculadora e limpar o display.
- **Desligamento Automático:**
  -  A calculadora se desligará automaticamente após 4 minutos de inatividade, limpando o display e reiniciando as variáveis.


## Tecnologias Utilizadas

- **HTML**: Para estruturar os elementos da calculadora.
- **CSS**: Para estilizar e organizar a interface usando:
  - Grid Layout
  - Flexbox
  - Variáveis CSS
  - Animações
- **javaScript**: Gerencia a lógica de operações e interação do usuário:
  - Desligamento automático.
      -  Utilizando o timeout para desligar a calculadora após 4 minutos de inatividade
      -  Limpa o display e reinicia as variáveis
  -  Limpeza de variaveis e display:
      -  Função "onClear()" limpa o display e redefine todas as variáveis
  -  Adição e Verificação de Números:
      -  Função "addNumero()" adiciona números ao display, limita o uso de pontos decimais e limita adição para 13 caracteres.
  -  Recebimento de Operadores Aritméticos:
      -  Funcão "opAritmetico()" permite ( +, -, *, / )
  -  Cálculo e Formatação de Resultados:
      -   Função "calcular()" executa a operação aritmética conforme operador selecionado, resultados são arredondados e cortados para nao exceder 13 caracteres e também tratamento de possíveis erros, exemplo divisões por "zero"

## Estrutura do Projeto
```plaintext
calculadora/
├── assets/
│   └── images/
│   └── css/
│       └── style.css
│   └── js/
│       └── script.js   
├── index.html
├── LICENSE
└── README.md
```
## Como Usar
### 1. Clone o repositório:
```git
git clone https://github.com/gabriel-engelles/calculadora.git
```
### 2. Navegue até o diretório do projeto:
```git
cd calculadora
```
### 3. Abra o arquivo index.html em seu navegador.

## Próximos Passos:
-  Adicionar verificação ao display para receber caracteres somente após "clicar" em "ON"

# Autor
Gabriel Engelles <br>
https://www.linkedin.com/in/gabriel-engelles


