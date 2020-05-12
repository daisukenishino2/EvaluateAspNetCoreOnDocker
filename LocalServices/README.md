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

.NETの接続文字列に関しては、以下の通り。

- RDB
  - "ConnectionString_SQL": "Data Source=localhost;Initial Catalog=Northwind;User ID=sa;Password=seigi@123;",
  - "ConnectionString_MCN": "Server=localhost;Database=test;User Id=root;Password=seigi@123",
  - "ConnectionString_NPS": "HOST=localhost;DATABASE=postgres;USER ID=postgres;PASSWORD=seigi@123;"
- NoSQL
  - ...
