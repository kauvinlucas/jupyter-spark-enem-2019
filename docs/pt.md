# Como usar este repositório
Para usar este repositório é necessario ter Apache Spark instalado na sua máquina. Caso não o tenha, voçê pode usar Docker e Docker Compose para instalar uma imagem que serviria para executar o notebook.

Em caso de optar por usar Docker e docker-compose para fazer a execução, recomenda-se realizar os seguintes pasos:

1. Faça download do repositório na pasta de su preferência
```git clone https://github.com/kauvinlucas/jupyter-spark-enem-2019.git```
2. Execute o arquivo YAML com o docker-compose da seguinte maneira:
```docker-compose up -d```
3. Uma vez executado com sucesso, navegue até a porta 8889 no seu navegador preferido: http://localhost:8889
4. Uma vez aberto o Jupyter, asegure-se de iniciar a sessão com o entorno *PySpark*. Se não se encontra na sessão chamada "PySpark", habilite-lo no Kernel > Change Kernel > PySpark
![Habilitar PySpark](https://raw.githubusercontent.com/kauvinlucas/jupyter-spark-enem-2019/main/assets/images/pyspark-session.png?token=AOGAMLZA5BXL3WZ3434KN2LBXETTG  "Habilitar PySpark")

Caso voçê já tenha Apache Spark instalado na sua máquina, seria recomendável seguir estes pasos:
1. Descarregue os módulos do Python necessarios
```
pip install -r requirements.txt
```
3. Abra o Jupyter Notebook (navegue até src/main.ipynb). Selecione um outro kernel para continuar.
4. Antes de executar alguma célula do notebook, crie uma nova célula e ingresse o seguinte (substitua `path` pelo caminho ao diretório do Apache Spark):
```Python
import findspark
spark_installation = "path"
findspark.init(spark_installation)
```
4. Altere os caminhos das pastas para que façam referencia ao repositório atual. Retire o `file:///mnt/` e o `/mnt/` dentro de cada célula correspondente.
![Instrução 1](/assets/images/docs-1.png)