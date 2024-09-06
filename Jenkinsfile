pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/sandeep-singh07/my-fullstack-app.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t my-fullstack-app .'
      }
    }

    stage('Run') {
      steps {
        sh 'docker run -d -p 5000:5000 my-fullstack-app'
      }
    }
  }
}
