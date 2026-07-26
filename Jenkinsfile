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
            mail to: 'sangramregade@gmail.com',
                 subject: "Pipeline Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_NUMBER} completed successfully.\n\nCheck: ${env.BUILD_URL}"
        }
        failure {
            echo 'Pipeline failed!'
            mail to: 'sangramregade@gmail.com',
                 subject: "Pipeline Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_NUMBER} failed.\n\nCheck: ${env.BUILD_URL}"
        }
    }
}
