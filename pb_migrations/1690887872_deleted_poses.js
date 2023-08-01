/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jixi74f8daxn58q");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jixi74f8daxn58q",
    "created": "2023-08-01 07:23:06.546Z",
    "updated": "2023-08-01 07:27:19.891Z",
    "name": "poses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "krazodcu",
        "name": "picture",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "fvhjtbqn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
