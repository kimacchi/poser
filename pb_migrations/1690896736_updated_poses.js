/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jq30tn6m120gnf0")

  // remove
  collection.schema.removeField("xydsv2hf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "messqu9i",
    "name": "age",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jq30tn6m120gnf0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xydsv2hf",
    "name": "age",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("messqu9i")

  return dao.saveCollection(collection)
})
