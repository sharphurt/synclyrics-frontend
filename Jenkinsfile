pipeline {
    agent any

    tools {
        dockerTool 'docker'
        nodejs "nodejs-default"
    }

    environment {
        APP_NAME = "sinkuro-react"
    }


    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                credentialsId: 'github',
                url: 'https://github.com/sharphurt/synclyrics-frontend.git'

                sh "ls -lat"
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker image prune -f"
                sh "docker build --force-rm -t ${env.APP_NAME} ."
            }
        }

        stage("Run Docker Image") {
            steps {
                sh "docker stop ${env.APP_NAME} || true && docker container rm ${env.APP_NAME} || true"
                sh "docker run --name ${env.APP_NAME} -v /etc/ssl:/etc/ssl -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf -d -p 80:80 -p 443:443 ${env.APP_NAME}"
            }
        }
    }

    post {
        always {
            script {
                withCredentials([string(credentialsId: 'telegram-bot-token', variable: 'TOKEN'),
                        string(credentialsId: 'telegram-bot-chat-id', variable: 'CHAT_ID')]) {
                sh """
                curl -s -X POST https://api.telegram.org/bot$TOKEN/sendMessage -d chat_id=$CHAT_ID -d parse_mode=markdown -d text="\
                *${env.BUILD_TAG}*: Build Complete!\n\n\
                *Project:* ${env.APP_NAME}\n\
                *Build status:* ${currentBuild.currentResult}\n\n\
                *App URL:* sharphurt.ru/
                "
                """
                }
            }

            cleanWs()
        }
    }
}
