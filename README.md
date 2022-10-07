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

API URL: `https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/user`

### Users

| HTTP   | Endpoint    | Description   |
| ------ | ------------| ------------- |
| GET    | `/user`     | Get all users |
| POST   | `/user`     | Create users  |
| PATCH  | `/user/:id` | Edit users    |
| DELETE | `/user/:id` | Delete users  |

```json
[
  {
    "_id": "633fe1e1dadc42808a40c8ce",
    "description": "pecinta kucing",
    "email": "makmur@mail.com",
    "name": "Makmur",
    "nickname": "makmur",
    "pethub_pets": "",
    "pets": [
      {
        "_id": "633fe2dfdadc42808a40c8d1",
        "animalTypes": "mammal",
        "color": "white",
        "name": "Cat",
        "notes": "like playing ball",
        "weight": 3
      }
    ],
    "photo": [
      {
        "fileName": "100_6.jpg",
        "url": "https://api.kontenbase.com/upload/file/storage/633fdefc40f5380221733277/HnMSdXAU/100_6.jpg"
      }
    ]
  }
]
```

### Posts

URL: `https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/posts`

| HTTP   | Endpoint     | Description   |
| ------ | -------------| ------------- |
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

### Pets

URL: `https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6/pets?$lookup=*`

| HTTP   | Endpoint    | Description   |
| ------ | ------------| ------------- |
| GET    | `/pets`     | Get all pets  |
| POST   | `/pets`     | Create pets   |
| PATCH  | `/pets/:id` | Edit pets     |
| DELETE | `/pets/:id` | Delete pets   |

```json
[
  {
    "_id": "633fe2dfdadc42808a40c8d1",
    "animalTypes": "mammal",
    "color": "white",
    "name": "Cat",
    "notes": "like playing ball",
    "user": [
      {
        "_id": "633fe1e1dadc42808a40c8ce",
        "description": "pecinta kucing",
        "email": "makmur@mail.com",
        "name": "Makmur",
        "nickname": "makmur",
        "pethub_pets": "",
        "photo": [
          {
            "fileName": "100_6.jpg",
            "url": "https://api.kontenbase.com/upload/file/storage/633fdefc40f5380221733277/HnMSdXAU/100_6.jpg"
          }
        ]
      }
    ],
    "weight": 3
  }
]
```
