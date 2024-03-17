# React-Pizza

## Installation (Option 1 dev-mode)

### Option 1 (dev-mode):

Clone repository\
Run npm install --legacy-peer-deps\
Run npm run start

### Option 2 (production-mode):

Clone repository\
Run docker buildx build . --tag imageName\
Run docker run -p 8080:80 imageName
