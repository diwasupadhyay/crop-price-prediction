pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'crop-price-predictor'
        DOCKER_TAG   = "${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat "docker build -t %DOCKER_IMAGE%:%DOCKER_TAG% ."
                bat "docker tag %DOCKER_IMAGE%:%DOCKER_TAG% %DOCKER_IMAGE%:latest"
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs above.'
        }
        always {
            cleanWs()
        }
    }
}
