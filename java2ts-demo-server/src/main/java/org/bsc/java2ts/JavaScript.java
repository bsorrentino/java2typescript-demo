package org.bsc.java2ts;

import java.io.InputStreamReader;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class JavaScript {

    private static final String JS_ENGINE_NAME = "nashorn";

    final ScriptEngineManager manager = new ScriptEngineManager();

    public final ScriptEngine scriptEngine;

    public static JavaScript create() {  return new JavaScript(); }

    private JavaScript()  {
    
        scriptEngine = manager.getEngineByName(JS_ENGINE_NAME);

        try {
            scriptEngine.eval(
                    "load('classpath:jvm-npm.js');" +
                    "java.lang.System.setProperty( \"jvm-npm.debug\", \"true\");" +
                    "var exports = {};");

            scriptEngine.eval( new InputStreamReader(getClass().getClassLoader().getResourceAsStream("ts/services.js")));

        } catch (ScriptException e) {
            throw new Error( e );
        }

    }

    public Object invokeFunction(String name, Object... args) throws NoSuchMethodException, ScriptException {

            final Invocable i = (Invocable)scriptEngine;

            return i.invokeFunction(name, (Object[])args );
    }
}

