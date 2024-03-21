# Node.jsの公式イメージをベースとして使用
FROM node:latest

# アプリケーションのソースコードを含むディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールするために、
# package.jsonとpackage-lock.json（あれば）をコピー
COPY ../package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY ../ .

# アプリケーションがリッスンするポートをDockerに伝える
# Next.jsのデフォルトポートは3000
EXPOSE 3000

# アプリケーションを起動するコマンド
CMD ["npm", "run", "dev"]
