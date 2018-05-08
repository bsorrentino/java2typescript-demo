FROM openjdk:8-jdk

# Expose is NOT supported by Heroku
#EXPOSE 8080


COPY java2ts-demo-1.0.0-SNAPSHOT.jar /home

WORKDIR /home

CMD java -Dport=$PORT -jar java2ts-demo-1.0.0-SNAPSHOT.jar
