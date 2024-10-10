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
        stage('Deploy to Render'){
            steps{
                withCredentials([string(credentialsId: 'Gallery_Nash_Render', variable: 'RENDER_API_KEY')]) {
                    sh """
                    curl -X POST https://api.render.com/v1/services/srv-cs3ovg88fa8c73df61dg/deploys \
                    -H "Authorization: Bearer $RENDER_API_KEY" \
                    -H "Content-Type: application/json" \
                    -d '{
                        "branch": "main"
                    }'
                    """
                }
            }
        }
    }
 }