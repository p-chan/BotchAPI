Botch API (公開停止中)
===

```
追記: 2015/11/27
現在、APIの公開を停止しています。
```

Botchはプロ野球の試合データをJSON形式で配布していたAPIです。
2015/06/14~の試合データを取り扱っていました。

## Usage (現在は利用できません)

### Get Score
#### Request
`GET http://botch.herokuapp.com/v0/scores/YYYYMMDD`

#### Response
```
{
  date: [
    {
      info: {start: '13:00', inning: 'end'},
      home: {team: 'F', score: '3'},
      away: {team: 'DB', score: '1'}
    },
    {
      info: {start: '13:00', inning: 'end'},
      home: {team: 'E', score: '4'},
      away: {team: 'D', score: '0'}
    },
    .
    .
    .
  ]
}
```

## Author
[@p1ch_jp](http://p1ch.jp)
