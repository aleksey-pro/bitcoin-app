# Bitcoin App

## PWA приложение, выводящее курсы электроннных валют

Получает и отображает текущий курс электронных валют из API

### Описание:

На главной странице отображаются карточки валют, а также общая сумма.

При нажатии на карточку валюты приложение переходит на страницу с информацией по выбранной валюте, а также строится график колебания курса за последний период.

Вверху имеется слайдер с мини карточками, по нажатию на которые также происходит переход на страницу с подробной информацией по выбранной валюте.

Данные берутся либо из redux-хранилища, либо из файла config.json, в котором имеются входящие данные, предположительно хранящиеся в сервисе.

### Demo:

Просматирвать с мобильника!

Ответить утвердительно на предложние "Добавить на главный экран".

https://bitcoin-app-16476.firebaseapp.com/

### Стек:

1. redux + reselect
2. css-modules
3. react-router
4. create-react-app
5. pwa 100% ready
6. Cryptocompare API (https://min-api.cryptocompare.com/documentation)
7. Графики http://recharts.org

### Установка

1. yarn install
2. yarn run start

Deploy: npm run build && firebase deploy
