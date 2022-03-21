# How to use this repository

If you don't have installed Apache Spark in your machine, you can use Docker and Docker Compose to execute the Jupyter notebook.

The notebook can be run locally if your machine has at least 8G of RAM and have the necessary software installed.

If you have Docker and Docker Compose, you can follow these steps to execute the notebook:

1. Download this repository to your prefered directory:
```git clone https://github.com/kauvinlucas/jupyter-spark-enem-2019.git```
2. Execute YAML file with Docker Compose.
```docker-compose up -d```
3. Once executed with success, go to the port 8889 on your favorite browser: http://localhost:8889
4. Once Jupyter is open, make sure to start *PySpark* kernel before executing the notebook. If Python3 or other environment has started instead, go to Kernel > Change Kernel > PySpark to start it.
![Habilitar PySpark](https://raw.githubusercontent.com/kauvinlucas/jupyter-spark-enem-2019/main/assets/images/pyspark-session.png?token=AOGAMLZA5BXL3WZ3434KN2LBXETTG  "Habilitar PySpark")

If you already have installed Apache Spark, it's recommended that you follow these steps:
1. Download the necessary Python modules:
```
pip install -r requirements.txt
```
2. Open the Jupyter notebook (in src/main.ipynb). Select a kernel to continue.
3. Before executing any cell, put this in a new cell while replacing `path` with the path to Apache Spark:
```Python
import findspark
spark_installation = "path"
findspark.init(spark_installation)
```
4. Change the paths inside each cell. Remove `file:///mnt/` and  `/mnt/` from all of the paths.
![Instruction 1](/assets/images/docs-1.png)