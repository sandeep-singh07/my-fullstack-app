pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-fullstack-app"
        REGISTRY = "sandeepsingh01/my-fullstack-app"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/sandeep-singh07/my-fullstack-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // You can add testing scripts here, like running unit tests
                    echo 'Running tests...'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                    // Push the image to Docker Hub
                    sh 'docker tag $DOCKER_IMAGE $REGISTRY'
                    sh 'docker push $REGISTRY'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker container
                    sh 'docker run -d -p 5001:5000 --name my-fullstack-app $DOCKER_IMAGE'
                }
            }
        }
    }

    post {
        always {
            // Clean up the Docker container after the build
            sh 'docker rm -f my-fullstack-app || true'
        }
    }
}

