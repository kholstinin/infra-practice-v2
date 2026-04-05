document.getElementById("load").onclick = async () => {
  const res = await fetch("/api/time");
  const text = await res.text();

  document.getElementById("out").innerText =
    "Status: " + res.status + "\n" + text;
};
