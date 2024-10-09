pipeline{
    agent any
    tools{
        nodejs "node"
    }
    stages{
        stage('Clone repo'){
            steps{
                git(
                    url 'https://github.com/Naspwon/gallery-nash.git',
                    branch 'main'
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
                echo "Tested successfully...."
            }
        }
        stage('Start application'){
            steps{
                sh 'nohup npm start &'
                sleep 10
                sh 'curl -I http://localhost:5000 || exit 1'
            }
        }
        stage('Deploy to Render'){
            steps{
                withCredentials([string(credentialsId: '1ff155a8-5a1e-4945-8cb3-90a740261851', variable: 'RENDER_TOKEN')]) {
                    sh 'render login --token $RENDER_TOKEN'
                    sh 'render deploy --branch main'}
            }
        }
    }
 }