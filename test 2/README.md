# Задание 2 (**)

## Задача: Список услуг.
Напишите проект, использующий React Router и Redux Saga или Mobx, который удовлетворяет следующим условиям:
1. На главной странице показывается список услуг (достаточно просто ссылок, редактирование не нужно) - данные загружаются методом GET на http://localhost:7070/api/services
2. При переходе по ссылке (/:id/details) - загружаются детали услуги методом GET на http://locahost:7070/api/services/:id
3. При загрузке списка услуг и детальной информации об услуге должен отображаться индикатор загрузки:

![loader](https://github.com/MeowRei/test-work-react/blob/master/test%202/pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png)

При ошибке - показывать сообщение об ошибке с кнопкой "Повторить запрос", при нажатии на которую осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![reload](https://github.com/MeowRei/test-work-react/blob/master/test%202/pic/D2446DA8-9A38-46DC-8B11-58846898BCA2.png)

Готовый бэкенд расположен в каталоге [backend](https://github.com/MeowRei/test-work-react/tree/master/test%202/backend).
