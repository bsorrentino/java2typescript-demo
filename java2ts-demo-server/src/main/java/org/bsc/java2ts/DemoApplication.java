package org.bsc.java2ts;

import static spark.Spark.*;

import javax.script.ScriptException;

public class DemoApplication {

	public static void main(String[] args) {

			final String port =  System.getProperty( "port", "8080");

			port( Integer.parseInt(port));

	    final JavaScript js = JavaScript.create();

	    staticFileLocation("/public");
			//externalStaticFileLocation("../java2ts-demo-client/www");

	    post( "/translate", "application/json", ( req, res) -> {
	        try {
							res.type("application/json");

	            return js.invokeFunction("convert", req.body() );

	        } catch (NoSuchMethodException | ScriptException e) {

	            res.status(500);
	            return e.getMessage();
	        }

	    });
	}
}
