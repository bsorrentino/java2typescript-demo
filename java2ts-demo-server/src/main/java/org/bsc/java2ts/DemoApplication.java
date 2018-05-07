package org.bsc.java2ts;

import static spark.Spark.*;

import javax.script.ScriptException;

public class DemoApplication {

	public static void main(String[] args) {

	    final JavaScript js = JavaScript.create();

	    port(8080);

	    //staticFileLocation("/public");
			externalStaticFileLocation("../java2ts-demo-client/www");

	    post( "/translate", "application/json", ( req, res) -> {
	        try {

	            return js.invokeFunction("convert", req.body() );

	        } catch (NoSuchMethodException | ScriptException e) {

	            res.status(500);
	            return e.getMessage();
	        }

	    });
	}
}
