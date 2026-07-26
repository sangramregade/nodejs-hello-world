pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sangramregade/nodejs-hello-world.git'
            }
        }

        stage('Test') {
            steps {
                sh 'node app.js &'
                sh 'sleep 2 && npm test'
            }
        }

        stage('Approval') {
            steps {
                input message: 'Approve deployment?', ok: 'Deploy'
            }
        }

        stage('Run') {
            steps {
                sh 'node app.js &'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
