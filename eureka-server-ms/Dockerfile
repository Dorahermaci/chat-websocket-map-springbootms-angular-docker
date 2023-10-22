FROM maven:3.9.3-eclipse-temurin-17 
EXPOSE 8761
ADD target/eureka-server-ms-0.0.1-SNAPSHOT.war eureka-server-ms-0.0.1-SNAPSHOT.war
ENTRYPOINT ["java", "-jar", "eureka-server-ms-0.0.1-SNAPSHOT.war"]
