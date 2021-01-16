import * as esbuild from 'esbuild-wasm';


// async function loadDB() {
//    await fileCache.setItem('color', 'red')

//    const color = await fileCache.getItem('color')

// }


export const unpkgPathPlugin = () => {
   return {
      name: 'unpkg-path-plugin',
      setup(build: esbuild.PluginBuild) {
         build.onResolve({ filter: /(^index\.js$)/ }, () => {
            return { path: 'index.js', namespace: 'a' }
         })

         build.onResolve({ filter: /^\.+\// }, (args: any) => {
            return {
               namespace: 'a',
               path: new URL(
                  args.path,
                  'https://unpkg.com' + args.resolveDir + '/'
               ).href
            }
         })

         build.onResolve({ filter: /.*/ }, async (args: any) => {
            return {
               namespace: 'a',
               path: `https://unpkg.com/${args.path}`,
            };
         });
      },
   };
};
