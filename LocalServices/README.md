このフォルダのコンテンツを実行するには、

当該リポジトリをクローンした後、
```
git clone https://github.com/daisukenishino2/EvaluateAspNetCoreOnDocker.git
```

このフォルダに移動し、
```
>cd ...\EvaluateAspNetCoreOnDocker\LocalServices
```

以下のコマンドを実行する。
```
>docker-compose up -d
```

テストを行う場合は、

以下のtestフォルダに移動し、
```
>cd ...\LocalServices\test
```

以下のbatファイルを実行する。
```
>install.bat
>start.bat
```
