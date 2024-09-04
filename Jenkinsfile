pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'landingpage-react-template', type: 'NodeJS'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/YogeshChandrakant/Jenkins-test-node.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to QA') {
            when {
                branch 'qa'
            }
            steps {
                // Add your deployment steps here, e.g., SCP to a server, AWS S3, etc.
                echo 'Deploying to QA environment...'
                // Example: sh 'scp -r build/ user@server:/path/to/deploy'
            }
        }

        stage('Deploy to UAT') {
            when {
                branch 'uat'
            }
            steps {
                echo 'Deploying to UAT environment...'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to Production environment...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
