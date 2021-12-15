const outputFileMap = {
    css: {
        standard: './dist/css/modern-theme.css',
        standard_min: './dist/css/modern-theme.min.css'
    },
    scss: {
        standard: './dist/scss/modern-theme.scss',
        standard_min: './dist/scss/modern-theme.min.scss',
        _config: './dist/scss/_config.scss',
        _config_min: './dist/scss/_config.min.scss'
    }
};

const inputFileMap = {
    components: './src/theme/components.scss',
    _config: './src/theme/config.scss',
};

const outputList = [
    outputFileMap.css.standard,
    outputFileMap.css.standard_min,
    outputFileMap.scss.standard,
    outputFileMap.scss.standard_min,
    outputFileMap.scss._config,
    outputFileMap.scss._config_min
];

const inputFileList = [
    inputFileMap._config,
    inputFileMap.components,
];

//==---=---=---=--=-=--===---====--===---=---=---=--=-=--===---====--=-===---=---=---=--=-=--===---====--=//


module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        clean: outputList,
        sass: {
            css_standard: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    [outputFileMap.css.standard]: inputFileMap.components
                }
            },
            css_standard_min: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    [outputFileMap.css.standard_min]: inputFileMap.components
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: false, src: inputFileMap.components, dest: outputFileMap.scss.standard},
                    {expand: false, src: inputFileMap._config, dest: outputFileMap.scss._config}
                ]
            }
        }
    });
    
    grunt.registerTask('default', [
        'clean',
        'sass',
        'copy'
    ]);
};