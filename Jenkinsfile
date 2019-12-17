pipeline {
    agent {
        docker {
            image "qaninja/node-wd"
            args "--network=127.0.0.1"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci-culqi"
            }
            post {
                always {
                     junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}