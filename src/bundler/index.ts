import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let service: esbuild.Service

async function bundler(code: string) {
    console.log(code)
    if (!service) {
        service = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })
    }

    try {
        const result = await service.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [
                unpkgPathPlugin(),
                fetchPlugin(code)
            ],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            }
        })

        return {
            code: result.outputFiles[0].text,
            error: ''
        }
    } catch (error) {
        return {
            error: error.message,
            code: ''
        }
    }

}

export default bundler