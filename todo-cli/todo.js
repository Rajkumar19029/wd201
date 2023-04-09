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

  const getOverdueItems = () => {
    return todos.filter((todo) => new Date(todo.dueDate) < new Date());
  };

  const getDueTodayItems = () => {
    const today = new Date().toLocaleDateString("en-CA");
    return todos.filter((todo) => todo.dueDate === today);
  };

  const getDueLaterItems = () => {
    const today = new Date().toLocaleDateString("en-CA");
    return todos.filter((todo) => todo.dueDate > today);
  };

  return {
    add,
    markAsComplete,
    all,
    getOverdueItems,
    getDueTodayItems,
    getDueLaterItems,
  };
};
