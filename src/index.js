import "./styles.css";

const onClickAdd = () => {
  // inputタグへ入力された値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素にliタグ, buttonタグを設定
  div.appendChild(li);

  // ulタグの子要素にdiv, li, buttonタグを設定して結果を反映
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
