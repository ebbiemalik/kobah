# AWS Dev Ops
This repository contains a setup (docker-compose.yaml) that will deploy the following environment:

* FTP fileserver
* Database server
* A nodejs application that pull files (csv) from the FTP server and stores the information in a database
* A restfull service to act on the stored information

## The test
The purpose of this test is to have the current setup deployed on AWS via Cloud Formation. 


### Instructions 

* Commit your Cloud Formation Stack(s) here (not to the original branch, make your own branch and pull request)
* Do not use ECR (the images must be pulled from Dockerhub)

### CREDENTIALS 

#### DOCKER HUB 

__user__: readonlyioi

__password__: ($7sfr<&wz'N

#### AWS
__user__: read_only@iownit.us

__password__: ($7sfr<&wz'N

__console url__: https://console.aws.amazon.com/

### DOCKER IMAGES
The images are available at [Iownit's dockerhub](https://hub.docker.com/r/iownit/aws-test)

__DATABASE__: iownit/aws-test:data_base_service

__FTP__: iownit/aws-test:ftp_service

__NODEJOB-CONSUMER__: iownit/aws-test:nodejs_job

__NODE-SERVICE__: iownit/aws-test:nodejs_service

#### PORTS

__FTP_SERVER__: 21

__DATABASE__: 27017

__NODE-SERVICE__: 80 (Publicly accessible, image is exposing 3000)


#### RUN the service locally (linux env)

```bash
sudo docker-compose up 
#OR 
sudo docker-compose build && sudo docker-compose up
```
