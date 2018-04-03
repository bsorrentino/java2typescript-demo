package org.bsc.java2ts;

import java.io.InputStreamReader;

import javax.annotation.PostConstruct;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class DemoServices {

    private static final String JS_ENGINE_NAME = "nashorn";

    final ScriptEngineManager manager = new ScriptEngineManager();

    ScriptEngine scriptEngine;

    @PostConstruct
    public void init() {

        scriptEngine = manager.getEngineByName(JS_ENGINE_NAME);

        try {
            scriptEngine.eval(
                    "load('classpath:jvm-npm.js');" +
                    "java.lang.System.setProperty( \"jvm-npm.debug\", \"true\");" +
                    "var exports = {};");

            scriptEngine.eval( new InputStreamReader(getClass().getClassLoader().getResourceAsStream("ts/services.js")));

        } catch (ScriptException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    @PostMapping("/convert")
    public ResponseEntity<String> convert( @RequestBody String input, ServerHttpRequest req  ) {

        try {

            final Invocable i = (Invocable)scriptEngine;

            Object result = i.invokeFunction("convert", input );

            return ResponseEntity.ok( String.valueOf(result) );

        } catch (NoSuchMethodException | ScriptException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @RequestMapping("/test")
    public ResponseEntity<String> test( ServerHttpRequest req  ) {

        try {

            final Invocable i = (Invocable)scriptEngine;

            i.invokeFunction("test", "[{" +
                    "      \"name\":\"java.util\"," +
                    "      \"types\":[" +
                    "        {\"name\":\"Iterator\"}," +
                    "        {\"name\":\"List\"}," +
                    "        {\"name\":\"Set\"}," +
                    "        {\"name\":\"Map\"}," +
                    "        {\"name\":\"Stack\"}," +
                    "        {\"name\":\"Arrays\", \"export\":true}," +
                    "        {\"name\":\"Base64\"}," +
                    "        {\"name\":\"Collections\", \"export\":true}," +
                    "        {\"name\":\"Optional\"}" +
                    "      ]}]");
        } catch (NoSuchMethodException | ScriptException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(System.getProperty("user.dir"));
    }

    @GetMapping("/rx_test")
    public Mono<String> rxtest( )  {

        return Mono.just( "path");
    }

}
