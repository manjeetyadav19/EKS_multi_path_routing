Create below certificate file again properly.
private.key
certificate.pem
certificate.crt
csr.pem


mkdir multip_path
cd multip_path/
npm install express
node app.js
 vi Dockerfile
docker build -t app_image .
docker run -d -p 3000:3000 app_image
docker ps
kubectl get pods
kubectl config current-context
kubectl config get-contexts
kubectl config current-context
 kubectl get nodes
aws configure
aws eks update-kubeconfig --region us-east-2 --name my-cluster

       docker tag app_image:latest 896757523510.dkr.ecr.us-east-2.amazonaws.com/sampleapp:latest
     
       aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 896757523510.dkr.ecr.us-east-2.amazonaws.com
kubectl apply -f app1-deployment.yaml
kubectl apply -f app1-service.yaml
  kubectl apply -f ingress.yaml
kubectl get all
