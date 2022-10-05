# Petshub

Social media for pet owners to share their pets info, meme, or just find pet things.

## Features

- Posting daily feed pet user, funny moment of pets or etc

## Team members

1. Muhammad Zulkarnaen Indranto ([Zulkarnaen](https://github.com/zul1996))
   - Design MockUp
2. Makmur ([Makmur](https://github.com/makmuremha))
   - Logic and Task
3. Muhammad Lutfi ([Lutfi](https://github.com/vektormuhammadlutfi))
   - Design Endpoint API
4. Ade Ahmad Faisal ([Ade](https://github.com/adeahmadfaisal))
   - Documentasi Readme

## Designs

- Mock-up: https://whimsical.com/pethub-LdS4mXjnkFtWtWUkWDCrPz
- Figma: https://www.figma.com/files/team/1158771382271261026
- Live: https://pets-hub.netlify.app/

## API Specification

URL: `https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c/User`

| HTTP   | Endpoint    | Description  |
| ------ | ----------- | ------------ |
| GET    | `/user`     | Get all user |
| POST   | `/user`     | Create user  |
| PATCH  | `/user/:id` | Edit user    |
| DELETE | `/user/:id` | Delete user  |

```
[
   {
      "_id": "633c333adadc42808a40c6f6",
      "email": "makmur@mail.com",
      "name": "Makmur",
      "nickname": "makmur",
      "Description": "Saya seorang pecinta kucing",
      "photo": [
                  {
                  "fileName": "100_6.jpg",
                  "url": "https://api.kontenbase.com/upload/file/storage/633aec8840f5380221732e21/SSUMEfCW/100_6.jpg"
                  }
               ]
   }
]
```

- API POST

URL: `https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c/Post`

| HTTP   | Endpoint    | Description  |
| ------ | ----------- | ------------ |
| GET    | `/post`     | Get all post |
| POST   | `/post`     | Create post  |
| PATCH  | `/post/:id` | Edit post    |
| DELETE | `/post/:id` | Delete post  |

```
[
  {
      "_id": "633aee13dadc42808a40c686",
      "description": "Sedang memikirkanmu",
      "tittle": "Apa yang sedang saya fikirkan",
      "CreatedAt": "2022-10-03T14:13:39.468Z",
      "UpdateAt": "2022-10-03T14:13:39.468Z",
      "UserCreated": null,
      "UserUpdate": null
  }
]
```
