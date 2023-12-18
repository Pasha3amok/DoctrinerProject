function dragStart(event) {
    // Встановлення данних для перетягування
    event.dataTransfer.setData('text/plain', button);
    // Встановлення елемента, який буде перетягуваний
    event.dataTransfer.setDragImage(event.target, 0, 0);
  }

  // Заборона вбудованого перетягування для елемента
  document.getElementById('draggableBlock').addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  // Можлива обробка події drop, якщо потрібно
  document.getElementById('draggableBlock').addEventListener('drop', function (event) {
    // Опціональна обробка події drop
    var draggedData = event.dataTransfer.getData('text/plain');
    console.log('Перетягнуто: ' + draggedData);
  });