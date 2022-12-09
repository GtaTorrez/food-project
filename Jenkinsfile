
node {
  // variables
  def imageTag = "food-project:latest"

  checkout scm

    stage('Deploy application') {
      sh "echo ${env.BRANCH_NAME}"

      switch (env.BRANCH_NAME) {
        case "DEV":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'API_URL=http://192.168.21.153:3001' >> .env"
          sh "docker build -t ${imageTag} ."
          sh "ls /var/jenkins_home/.ssh/"
          sh "scp -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa ./docker-compose.yml test@192.168.21.153:~/frontend/docker-compose.yaml "
          sh 'ssh -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa test@192.168.21.153 "cd frontend && docker-compose down && docker-compose up -d"'
          break

        case "QA":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'API_URL=http://192.168.21.153:3001' >> .env"
          // Lint  
        //   sh "docker run --rm ${imageTag} npm run lint"
          // Test unitarios
        //   sh "docker run --rm ${imageTag} npm test"
          sh "scp -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa ./docker-compose.yml test@192.168.21.153:~/frontend/docker-compose.yaml "
          sh 'ssh -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa test@192.168.21.153 "cd frontend && docker-compose down && docker-compose up -d"'
          break

        case "PROD":
          sh "echo 'ENVIROMENT=production' >> .env"
          sh "echo 'API_URL=http://192.168.21.153:3001' >> .env"
          sh "scp -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa ./docker-compose.yml test@192.168.21.153:~/frontend/docker-compose.yaml "
          sh 'ssh -oStrictHostKeyChecking=no -i /var/jenkins_home/.ssh/id_rsa test@192.168.21.153 "cd frontend && docker-compose down && docker-compose up -d"'
          break

        default:
          echo "Mensaje para todas las ramas"
      }
    }
  
}