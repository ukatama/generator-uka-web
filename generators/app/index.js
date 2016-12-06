const chalk = require('chalk');
const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting() {
        this.log(yosay(
            `Welcome to the phenomenal ${chalk.red('generator-uka-web')} generator!`
        ));

        const prompts = [
            {
                name: 'name',
                message: 'Project Name',
            },
            {
                name: 'description',
                message: 'Project Description',
            },
            {
                name: 'author',
                message: 'Project Author',
            },
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    },

    writing() {
        [
            'config/default.yml',
            'public/index.html',
            'src/browser/components/App.jsx',
            'src/browser/reducers/index.js',
            'src/browser/styles/global.styl',
            'src/browser/index.js',
            'src/browser/render.jsx',
            'src/browser/store.js',
            'src/server/index.js',
            'src/server/router.js',
            'src/server/server.js',
            '.babelrc',
            '.eslintrc.yml',
            '.gitignore',
            '.travis.yml',
            'LICENSE',
            'package.json',
            'README.md',
            'webpack.config.babel.js',
        ].forEach(path => {
            this.fs.copyTpl(
                this.templatePath(path),
                this.destinationPath(path),
                this.props
            );
        });
    },

    install() {
        this.installDependencies();
    },
});
