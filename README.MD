Create below certificate file again properly.
private.key
certificate.pem
certificate.crt
csr.pem


  840  mkdir multip_path
  842  cd multip_path/
  845  npm install express
  846  node app.js
  847  vi Dockerfile
  849  docker build -t app_image .
  851  docker run -d -p 3000:3000 app_image
  852  docker ps
  854  kubectl get pods
  855  kubectl config current-context
  856  kubectl config get-contexts
  857  kubectl config current-context
  863  kubectl get nodes
  879  aws configure
  880  aws eks update-kubeconfig --region us-east-2 --name my-cluster

       docker tag app_image:latest 896757523510.dkr.ecr.us-east-2.amazonaws.com/sampleapp:latest
     
       aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 896757523510.dkr.ecr.us-east-2.amazonaws.com

  898  kubectl apply -f app1-deployment.yaml
  899  kubectl apply -f app1-service.yaml
  900  kubectl apply -f ingress.yaml
  901  kubectl get all
