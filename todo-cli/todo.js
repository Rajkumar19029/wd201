module.exports = () => {
  const todos = [];

  const add = (todo) => {
    todos.push(todo);
  };

  const markAsComplete = (index) => {
    todos[index].completed = true;
  };

  const all = () => {
    return todos;
  };

  const today = new Date().toLocaleDateString("en-CA");

  const getOverdueItems = () => {
    return todos.filter((todo) => new Date(todo.dueDate) < new Date(today));
  };

  const getDueTodayItems = () => {
    return todos.filter((todo) => todo.dueDate === today);
  };

  const getDueLaterItems = () => {
    return todos.filter((todo) => todo.dueDate > today);
  };

  const toDisplayableList = () => {
    return todos
      .map((todo) => {
        const completionStatus = todo.completed ? "[x]" : "[ ]";
        const displayedDate =
          todo.dueDate === new Date().toISOString().slice(0, 10)
            ? ""
            : todo.dueDate;
        return `${completionStatus} ${todo.title.trim()} ${displayedDate.trim()}`;
      })
      .join("\n");
  };

  return {
    add,
    markAsComplete,
    all,
    getOverdueItems,
    getDueTodayItems,
    getDueLaterItems,
    toDisplayableList,
  };
};
