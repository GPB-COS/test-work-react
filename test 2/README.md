# Задание 2 (**)

Список и детали
Напишите проект, использующий React Router и Redux Saga или Mobx, который удовлетворяет следующим условиям:
1. На главной странице показывается список услуг (редактирование не нужно, достаточно просто ссылок) - данные загружаются методом GET на http://localhost:7070/api/services
2. При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id
При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

![loader](https://github.com/GPB-COS/test-work-react/blob/master/test%202/pic/B13CC99F-A588-40A3-BAB3-EDF25B140F3D.png)

При ошибке - показываться сообщение об ошибке и кнопка "Повторить запрос", при нажатии на которой осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![reload](https://github.com/GPB-COS/test-work-react/blob/master/test%202/pic/D2446DA8-9A38-46DC-8B11-58846898BCA2.png)

Готовый бэкенд расположен в каталоге [backend](https://github.com/GPB-COS/test-work-react/tree/master/test%202/backend).
