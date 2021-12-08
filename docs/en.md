# How to use this repository

It's necessary to have Docker and Docker Compose installed in your machine.

The whole project was done in a Jupyter notebook in Portuguese language called main.ipynb that can be executed if your machine has at least 8G of RAM and have the necessary software installed. The following steps describe how to do it:

1. Download this repository to your prefered directory:
```git clone https://github.com/kauvinlucas/jupyter-spark-enem-2019.git```
2. Execute YAML file with Docker Compose.
```docker-compose up -d```
3. Once executed with success, go to the port 8889 on your favorite browser: http://localhost:8889
4. Once Jupyter is open, make sure to start *PySpark* session before executing the notebook. If Python3 or other environment has started instead, go to Kernel > Change Kernel > PySpark to start it.
![Habilitar PySpark](https://raw.githubusercontent.com/kauvinlucas/jupyter-spark-enem-2019/main/assets/images/pyspark-session.png?token=AOGAMLZA5BXL3WZ3434KN2LBXETTG  "Habilitar PySpark")
