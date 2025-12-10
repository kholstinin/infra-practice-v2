import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `Todos — ${todos.length}`;
  }, [todos.length]);

  function addTodo(e) {
    e?.preventDefault?.();
    const text = task.trim();
    if (!text) return;
    setTodos((t) => [{ id: Date.now(), text }, ...t]);
    setTask("");
  }

  function removeTodo(id) {
    setTodos((t) => t.filter((it) => it.id !== id));
  }

  return (
    <div
      style={{
        fontFamily: "Inter, Roboto, Arial, sans-serif",
        maxWidth: 720,
        margin: "40px auto",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        background: "white",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20 }}>
          Simple React — single file example
        </h1>
        <div>
          <button onClick={() => setCount((c) => c - 1)} style={buttonStyle}>
            -
          </button>
          <span style={{ margin: "0 10px", fontWeight: 600 }}>{count}</span>
          <button onClick={() => setCount((c) => c + 1)} style={buttonStyle}>
            +
          </button>
        </div>
      </header>

      <section style={{ marginBottom: 18 }}>
        <form onSubmit={addTodo} style={{ display: "flex", gap: 8 }}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New todo"
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #ddd",
            }}
          />
          <button type="submit" style={buttonStyle}>
            Add
          </button>
        </form>
      </section>

      <section>
        {todos.length === 0 ? (
          <p style={{ color: "#666" }}>No todos yet — add one above.</p>
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 8,
            }}
          >
            {todos.map((t) => (
              <li
                key={t.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  border: "1px solid #f0f0f0",
                  borderRadius: 8,
                }}
              >
                <span>{t.text}</span>
                <div>
                  <button
                    onClick={() => removeTodo(t.id)}
                    style={{
                      ...buttonStyle,
                      background: "transparent",
                      border: "1px solid #eee",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer style={{ marginTop: 18, color: "#888", fontSize: 13 }}>
        <div>
          Tip: this file is a single React component with local state and small
          side effects.
        </div>
      </footer>
    </div>
  );
}

const buttonStyle = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "none",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
  fontWeight: 600,
};
