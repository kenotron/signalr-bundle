import { createFilter } from "@rollup/pluginutils";

export function signalTransformPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    transform(code, id) {
      if (!filter(id)) return;

      const generatedCode = `import * as jQueryPolyfill from 'signalr-no-jquery/src/jQueryShim';\n${code.replace(
        /window\.jQuery/g,
        "jQueryPolyfill"
      )}`;

      return {
        code: generatedCode,
        map: null,
      };
    },
  };
}
