# Como usar este repositório
Para usar este repositório é necessario ter Docker e Docker Compose instalados na sua máquina.

Este repositório vem com os notebooks Jupyter que podem ser executados ou visualizados na sua máquina. Para fazer a execução, recomenda-se realizar os seguintes pasos:

1. Faça download do repositório na pasta de su preferência
```git clone https://github.com/kauvinlucas/jupyter-spark-enem-2019.git```
2. Execute o arquivo YAML com o docker-compose.
```docker-compose up -d```
3. Uma vez executado com sucesso, navegue até a porta 8889 no seu navegador preferido: http://localhost:8889
4. Uma vez aberto o Jupyter, asegure-se de iniciar a sessão com o entorno *PySpark*. Se não se encontra na sessão do PySpark, habilite-lo no Kernel > Change Kernel > PySpark
![Habilitar PySpark](https://raw.githubusercontent.com/kauvinlucas/jupyter-spark-enem-2019/main/assets/images/pyspark-session.png?token=AOGAMLZA5BXL3WZ3434KN2LBXETTG  "Habilitar PySpark")
