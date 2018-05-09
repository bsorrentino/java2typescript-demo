"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_types_1 = require("ts/demo-types");
var collections_1 = require("ts/collections");
function convert(model) {
    var packages = JSON.parse(model);
    var res = _convert(packages);
    return JSON.stringify(res);
}
function _convert(packages) {
    var declaredTypesMap = new collections_1.HashMap();
    packages
        .forEach(function (p) {
        p.types.filter(function (t) { return t.enabled; }).forEach(function (t) {
            var clazz = demo_types_1.Class.forName(p.name + "." + t.name);
            var ts = (t.alias) ?
                demo_types_1.TSType.from(clazz, t.alias, t.export || false) :
                demo_types_1.TSType.from(clazz, t.export || false);
            declaredTypesMap.put(clazz.getName(), ts);
        });
    });
    var converter = new demo_types_1.TypescriptConverter();
    var decl = declaredTypesMap.values().stream()
        .map(function (t) { return converter.processClass(0, t, declaredTypesMap); })
        .collect(demo_types_1.Collectors.joining("\n\n"));
    var sb0 = demo_types_1.TypescriptConverter.loadDefaultDeclarations(demo_types_1.Optional.empty());
    sb0.append(decl);
    var defn = declaredTypesMap.values().stream()
        .filter(function (t) { return t.isExport(); })
        .map(function (t) { return converter.processStatic(t, declaredTypesMap); })
        .collect(demo_types_1.Collectors.joining("\n\n"));
    var sb1 = demo_types_1.TypescriptConverter.loadDefaultDefinition(demo_types_1.Optional.empty());
    sb1.append(defn);
    return [sb0.toString(), sb1.toString()];
}
