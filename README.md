Botch API
===
Botchはプロ野球の試合データをJSON形式で配布するAPIです。
2015/06/14~の試合データを取り扱っています。

## Usage

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

## Scraping from
[SportsNavi - Yahoo](http://sports.yahoo.co.jp/)

## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author
[@p1ch_jp](http://p1ch.jp)