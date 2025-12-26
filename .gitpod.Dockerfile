FROM gitpod/workspace-full-vnc

RUN npm install -g webpack webpack-cli webpack-dev-server
RUN sudo add-apt-repository ppa:chrdevs/figma && sudo apt update && sudo apt install figma-linux libgbm-dev firefox -y