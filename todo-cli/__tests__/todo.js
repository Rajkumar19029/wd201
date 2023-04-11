const todoList = require("../todo");
const {
  all,
  markAsComplete,
  add,
  getOverdueItems,
  getDueTodayItems,
  getDueLaterItems,
} = todoList();

describe("TodoList Test Suite", () => {
  const today = new Date().toLocaleDateString("en-CA");

  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    expect(all().length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    const index = all().length - 1;
    expect(all()[index].completed).toBe(false);
    markAsComplete(index);
    expect(all()[index].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overDueTodoItemsCount = getOverdueItems().length;
    add({
      title: "Overdue todo",
      completed: false,
      dueDate: new Date("2022-01-01").toLocaleDateString("en-CA"),
    });
    expect(getOverdueItems().length).toEqual(overDueTodoItemsCount + 1);
  });

  test("Should retrieve items due today", () => {
    const dueTodayTodoItemsCount = getDueTodayItems().length;
    add({
      title: "Todo due today",
      completed: false,
      dueDate: today,
    });
    expect(getDueTodayItems().length).toEqual(dueTodayTodoItemsCount + 1);
  });

  test("Should retrieve items due later", () => {
    const dueLaterTodoItemsCount = getDueLaterItems().length;
    add({
      title: "Todo due later",
      completed: false,
      dueDate: new Date(Date.now() + 86400000).toLocaleDateString("en-CA"),
    });
    expect(getDueLaterItems().length).toEqual(dueLaterTodoItemsCount + 1);
  });
});
