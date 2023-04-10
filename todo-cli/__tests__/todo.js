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
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all().length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all()[0].completed).toBe(false);
    markAsComplete(0);
    expect(all()[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overdueItems = getOverdueItems();
    expect(overdueItems.length).toBe(2);
  });

  test("Should retrieve items due today", () => {
    const dueTodayItems = getDueTodayItems();
    expect(dueTodayItems.length).toBe(2);
  });

  test("Should retrieve items due later", () => {
    const initialCount = getDueLaterItems().length;
    add({
      title: "Test todo due later",
      completed: false,
      dueDate: new Date(Date.now() + 86400000).toLocaleDateString("en-CA"),
    });
    const dueLaterItems = getDueLaterItems();
    expect(dueLaterItems.length).toBe(initialCount + 1);
  });
});
