package org.bsc.java2ts;

import static spark.Spark.externalStaticFileLocation;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.staticFileLocation;

import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**

mvn package exec:java -DDevelop=true -Dorg.slf4j.simpleLogger.defaultLogLevel=debug
 */
public class DemoApplication {
    final static Logger logger = LoggerFactory.getLogger(DemoApplication.class);

    public static void main(String[] args) {

        final String port = System.getProperty("port", "8080");

        port(Integer.parseInt(port));

        final JavaScript js = JavaScript.create();

        if (Boolean.getBoolean("Develop")) {

            logger.debug("Develop mode on");
            externalStaticFileLocation("../java2ts-demo-client/www");
        } else {
            logger.debug("Production mode on");
            staticFileLocation("/public");
        }

        post("/translate", "application/json", (req, res) -> {
            try {
                res.type("application/json");

                return js.invokeFunction("convert", req.body());

            } catch (NoSuchMethodException | ScriptException e) {

                res.status(500);
                return e.getMessage();
            }

        });
    }
}
