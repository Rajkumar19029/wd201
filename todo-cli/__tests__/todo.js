const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  let todoItemsCount;

  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    add({
      title: "Test overdue todo",
      completed: false,
      dueDate: "2021-01-01",
    });
  });

  beforeEach(() => {
    todoItemsCount = all.length;
  });

  test("Should add new todo", () => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);

    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const overdueItems = getOverdueItems();

    expect(overdueItems.length).toBeGreaterThan(0);
  });

  test("Should retrieve items due today", () => {
    const dueTodayItems = getDueTodayItems();

    expect(dueTodayItems.length).toBeGreaterThanOrEqual(0);
  });

  test("Should retrieve items due later", () => {
    const dueLaterItems = getDueLaterItems();

    expect(dueLaterItems.length).toBeGreaterThanOrEqual(0);
  });
});
