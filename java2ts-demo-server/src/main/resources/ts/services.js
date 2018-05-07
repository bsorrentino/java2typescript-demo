"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_types_1 = require("ts/demo-types");
var collections_1 = require("ts/collections");
function convert(model) {
    var packages = JSON.parse(model);
    var declaredTypesMap = new collections_1.HashMap();
    packages
        .forEach(function (p) {
        p.types.filter(function (t) { return t.enabled; }).forEach(function (t) {
            var clazz = p.name + "." + t.name;
            var ts = demo_types_1.TSType.from(demo_types_1.Class.forName(clazz), t.export || false);
            declaredTypesMap.put(clazz, ts);
        });
    });
    var converter = new demo_types_1.TypescriptConverter();
    var result = declaredTypesMap.values().stream()
        .map(function (t) { return converter.processClass(0, t, declaredTypesMap); })
        .collect(demo_types_1.Collectors.joining("\n\n"));
    var sb = demo_types_1.TypescriptConverter.loadDefaultDefinition(demo_types_1.Optional.empty());
    return sb.append(result).toString();
}
