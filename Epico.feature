Feature: Sorteio amigo secreto

  Background:
    Given estou na tela de inicial
    And o sorteio não foi realizado

  Scenario: Adicionar menos de 4 amigos
    When adicione menos de 4 nomes
    Then um alert será exibido indicando que é necessário pelo menos 4 amigos na lista para o sorteio

  Scenario: Adicionar amigos a lista
    When adiciono 4 ou mais amigos a lista
    Then os nomes são exibidos nos Amigos incluídos

  Scenario: Remoção de amigo
    When clico em cima do nome do amigo
    Then o amigo será excluido da lista
    And a lista "Amigos incluídos" será atualizada
    When o sorteio já foi realizado
    Then a lista "Amigos incluídos" será atualizada
    And a lista do sorteio limpa

  Scenario: Realizar sorteio
    And os amigos foram adicionados a lista
    When clico em sortear
    Then é exibido a lista de pares do lado direito da tela

  Scenario: Reiniciar
    When clico em reiniciar
    Then todos os campos são limpos
