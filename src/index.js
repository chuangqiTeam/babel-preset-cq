/**
 * Copyright (c) 2015-present, rainie, Inc.
 * All rights reserved.
 *
 */

import presetLatest from 'babel-preset-latest';
import presetEnv from 'babel-preset-env';

 // class { handleClick = () => { } }
import transformClassProperties from 'babel-plugin-transform-class-properties';
// { ...todo, completed: true }
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
// function* () { yield 42; yield 43; }
import transformRegenerator from 'babel-plugin-transform-regenerator';
// Polyfills the runtime needed for async/await and generators
import transformRuntime from 'babel-plugin-transform-runtime';

const plugins = [

    [
        require.resolve('babel-plugin-transform-regenerator'), {
            // Async functions are converted to generators by babel-preset-latest
            async: false
        },
    ],

    [
        require.resolve('babel-plugin-transform-runtime'), {
            helpers: false,
            polyfill: false,
            regenerator: true,
            // Resolve the Babel runtime relative to the config.
            moduleName: path.dirname(require.resolve('babel-runtime/package')),
        },
    ],
];


export default function(context, opts = {target: 'web'}) {
    const options = opts;

    return {
        presets: [
            options.target === 'web' && [presetLatest, {modules: false}],
            // ES features necessary for user's Node version
            options.target === 'node' && [presetEnv, {targets: {node: parseFloat(process.versions.node)}}],
        ],
        plugins: [
            transformClassProperties,
            transformObjectRestSpread,
            transformRegenerator,
            transformRuntime,
        ],
    };
};
