Start: npm run start-client

####TODO####

1. Создать таблицу пользователей с: 
- идентификатором, 
- именем, 
- мылом, 
- датой регистрации, 
- датой последнего логина, 
- статусом.

Цель на 26.09:
- [POST] /user принимает пользователя и создаёт запись в базе;
- [PATCH] /user/:id/block блокирует пользователя по id (isBlocked = true);
- [PATCH] /user/:id/unblock раблокирует пользователя по id (isBlocked = false);
- [DELETE] /user/:id/ удаляет пользователя по id
- [GET] /user/:id/ получает пользователя по id
- [GET] /users/ получает таблицу с пользователями

Модель пользователя:
1) ID - Int, required, incremented
2) fullName - string, maxLength = 250, required
3) email - string, maxLength = 250, required
4) createdUTC = date, required, defaultDate = now
5) lastLoginUTC - date, required, defaultDate = now
6) isBlocked - boolean(bit), required, default = false

Step 1: Создать таблицу USERS на базе MySQL, используя модель пользователя
Step 2: Написать SQL скрипты, реализующие запросы сервера
Step 3: Реализовать данные запросы с использованием express js
Step 4: Связать express сервер с SQL скриптами
