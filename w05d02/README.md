# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Activity: Convert 2 Spreadsheets
- [x] Student Suggestion ERD(s)

### Primary Keys
* uniquely identify a particular record
* any data type
* integers for PK
* foreign keys have to be the same data type as the PK

### Naming Conventions
* all PK should be `id`
* all FK should be the singular of the table name plus `_id` `user_id` `product_id`
* all tables should be plural

### Data Types
* when a record is created, the db will set aside space in memory for each field

### Relationship Types
* 3 types of relationships
* one-to-one => one record in table A is related to only one record in table B
* one-to-many => one record in table A is related to one or more records in table B
* many-to-many => one or more records in table A are related to one or more records in table B
* junction, join, bridge

### Design Concepts
* Make fields required based on initial data
* Use intelligent default values timestamp NOW(), is_active true
* Don't use calculated fields. first_name last_name full_name
* Pull repeating values out to another table (lookup table) `cities` `city_id`
  * Saskatoon
  * Sasktoon
  * S'toon
  * Toontown
* Try not to delete anything; soft delete `is_active`

### ERD
* Entity Relationship Diagram
* shows our tables and how they are related












