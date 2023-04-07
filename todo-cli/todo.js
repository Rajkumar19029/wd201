const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date();
    const overdueItems = [];

    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate < today.toISOString().split("T")[0]) {
        overdueItems.push(all[i]);
      }
    }

    return overdueItems;
  };

  const dueToday = () => {
    const dueTodayItems = [];
    const today = new Date();

    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate === today.toISOString().split("T")[0]) {
        dueTodayItems.push(all[i]);
      }
    }

    return dueTodayItems;
  };

  const dueLater = () => {
    const dueLaterItems = [];
    const today = new Date();

    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate > today.toISOString().split("T")[0]) {
        dueLaterItems.push(all[i]);
      }
    }

    return dueLaterItems;
  };

  const toDisplayableList = (list) => {
    let displayableList = "";

    list.forEach((item) => {
      const isCompleted = item.completed ? "[x]" : "[ ]";
      let dateDue = "";
      if (item.dueDate !== undefined && item.dueDate !== null) {
        if (item.dueDate === new Date().toISOString().split("T")[0]) {
          dateDue = "";
        } else {
          dateDue = `${item.dueDate}`;
        }
      }

      if (item === list[list.length - 1]) {
        displayableList += `${isCompleted} ${item.title} ${dateDue}`;
      } else {
        displayableList += `${isCompleted} ${item.title} ${dateDue}\n`;
      }
    });

    return displayableList;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
