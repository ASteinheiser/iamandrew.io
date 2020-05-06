This project was created with [Create React App](https://github.com/facebook/create-react-app).

# iamandrew.io

## Run it locally
```
git clone https://github.com/ASteinheiser/iamandrew.io
cd iamandrew.io
nvm use
yarn
yarn start
``` 

## Build and release
### Manual
1. `yarn build`
2. The `build/` folder will have all the files for your site. Copy these wherever they need to go (S3 bucket for example).
### Automatic (AWS Code Pipeline)
Once you [setup the pipeline](https://aws.amazon.com/codepipeline/), any time you push to master on your git repo, it will deploy a new build of your site. It reads the `buildspec.yml` file and performs actions with the [aws-cli](https://aws.amazon.com/cli/).
