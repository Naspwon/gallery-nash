pipeline{
    agent any
    tools{
        nodejs "node"
    }
    stages{
        stage('Clone repo'){
            steps{
                git(
                    url: 'https://github.com/Naspwon/gallery-nash.git',
                    branch: 'main'
                )
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Run tests'){
            steps{
                echo "Tested successfully!!!"
            }
        }
        stage('Start application'){
            steps{
                sh 'nohup npm start &'
                sleep 10
                sh 'curl -I http://localhost:5000 || exit 1'
            }
        }
        stage('Deploy to Heroku'){
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'Heroku_API_Key', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gallery-nash.git main'
                }
            }
        }
    }
 }