# Petshub

Social media for pet owners to share their pets info, meme, or just find pet things.

Live URLs:

- https://pets-hub.netlify.app
- https://petshub.mzoel.com
- https://petshub.adeahmadfaisal.com
- https://petshub.makmurmakmur.com
- https://petshub.vektorlutfi.com

## Features

- Displaying all feed posts
- Posting daily feed pet user, funny moment of pets or etc

## Team members

1. Muhammad Zulkarnaen Indranto ([@zul1996](https://github.com/zul1996))
   - Design MockUp
2. Makmur ([@makmuremha](https://github.com/makmuremha))
   - Logic and Task
3. Muhammad Lutfi ([@vektormuhammadlutfi](https://github.com/vektormuhammadlutfi))
   - Design Endpoint API
4. Ade Ahmad Faisal ([@adeahmadfaisal](https://github.com/adeahmadfaisal))
   - Documentasi Readme

## Designs

- Mock-up: https://whimsical.com/pethub-LdS4mXjnkFtWtWUkWDCrPz
- Figma: https://www.figma.com/files/team/1158771382271261026
- Live: https://pets-hub.netlify.app/

## API Specification

API URL: `https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c/User`

### Users

| HTTP   | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/users`     | Get all users |
| POST   | `/users`     | Create users  |
| PATCH  | `/users/:id` | Edit users    |
| DELETE | `/users/:id` | Delete users  |

```json
[
  {
    "_id": "633c333adadc42808a40c6f6",
    "email": "makmur@mail.com",
    "name": "Makmur",
    "nickname": "makmur",
    "description": "Saya seorang pecinta kucing",
    "photo": [
      {
        "fileName": "100_6.jpg",
        "url": "https://api.kontenbase.com/upload/file/storage/633aec8840f5380221732e21/SSUMEfCW/100_6.jpg"
      }
    ]
  }
]
```

### Posts

URL: `https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c/Post`

| HTTP   | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/posts`     | Get all posts |
| POST   | `/posts`     | Create posts  |
| PATCH  | `/posts/:id` | Edit posts    |
| DELETE | `/posts/:id` | Delete posts  |

```json
[
  {
    "_id": "633aee13dadc42808a40c686",
    "description": "Sedang memikirkanmu",
    "title": "Apa yang sedang saya fikirkan",
    "createdAt": "2022-10-03T14:13:39.468Z",
    "updatedAt": "2022-10-03T14:13:39.468Z",
    "createdBy": null,
    "updatedBy": null
  }
]
```
