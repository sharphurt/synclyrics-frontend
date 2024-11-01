pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sharphurt/synclyrics-frontend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sshagent(['server-ssh-key']) {
                    sh '''
                    scp -r build/ root@150.241.92.108:/src/synclyrics/frontend
                    ssh user@your_server "cd /src/synclyrics/frontend && mv build/* /synclyrics/frontend && rm -r build"
                    '''
                }
            }
        }
    }
}
