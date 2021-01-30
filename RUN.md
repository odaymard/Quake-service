# Nearby-earthquakes



## Table of Contents

- [Requirements](#Requirements)
- [Build](#Build)
- [Running](#Running)  
- [Run without docker](#Run-without-docker)
- [Testing](#Testing)


## Requirements
You need to have docker installed 

- Docker 20.10.2

Or  if you do not want to run it as a container  you need to install 


- Node v14.15.4

- NPM 6.14.4  



## Build
In the root directory.

Run  `docker build --tag dockerquakeapp .  `  in the root Directory to build docker image.
Try `sudo` if you asked for permissions.

Make sure the image is created by excuting `docker images`
## Running
```  docker run -it dockerquakeapp ```
  command will start up the app. 

## Run without docker
    In the root Directory run: 

```
    - npm install
    - npm run start
```

    




## Testing 
   

To run the test

`npm run test`





