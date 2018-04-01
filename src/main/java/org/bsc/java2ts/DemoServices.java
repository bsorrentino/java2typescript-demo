package org.bsc.java2ts;

import javax.annotation.PostConstruct;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
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
 
        
    }
    
    @RequestMapping("/test")
    public ResponseEntity<String> test( ServerHttpRequest req  ) {
        
       
        return ResponseEntity.ok(System.getProperty("user.dir"));
    }
    
    @GetMapping("/rx_test")
    public Mono<String> rxtest( )  {
        
        return Mono.just( "path");
    }

}
