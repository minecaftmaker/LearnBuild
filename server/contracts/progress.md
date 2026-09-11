# Progress contract

`GET /progress` returns the caller's progress. `PUT /progress/:lessonId` accepts completion metadata and is idempotent. XP should be computed server-side when competitive integrity matters.
