document.getElementById("load").onclick = async () => {
  const out = document.getElementById("out");
  try {
    const res = await fetch("/api/time");
    const data = await res.json();
    out.innerText = "Online response:\n" + JSON.stringify(data, null, 2);
  } catch (e) {
    out.innerText = "Offline (from SW cache if available)";
  }
};
