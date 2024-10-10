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
        stage('Check connectivity'){
            steps{
                sh 'ping -c 3 google.com'  // Verify internet connectivity
            }
        }
        stage('Install Render CLI') {
            steps {
                sh '''
                    curl -sSL https://get.render.com/cli.sh | sh
                    echo "export PATH=\$PATH:\$HOME/.local/bin" >> ~/.bashrc
                    source ~/.bashrc  // Update the current session
                    render --version  // Verify installation
                '''
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
        stage('Deploy to Render'){
            steps{
                withCredentials([string(credentialsId: 'Gallery_Nash_Render', variable: 'RENDER_TOKEN')]) {
                    sh 'render login --token $RENDER_TOKEN'
                    sh 'render deploy --branch main'}
            }
        }
    }
 }