import "./styles.css";

const onClickAdd = () => {
  // inputタグへ入力された値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完リストから指定の要素を削除（共通化）
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数（共通化）
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // buttonタグ（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    // 未完了TODOエリアから完了したTODOを削除する
    deleteFromIncompleteList(completeTarget);

    // 完了したTODO内容を取得する
    const text = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      // 完了エリアから完了TODOを削除する
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容を取得する
      const text = deleteTarget.firstElementChild.innerText;

      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // completeエリアにcompleteTargetを追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // buttonタグ（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素にliタグ, 各buttonタグを設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulタグの子要素にdiv, li, buttonタグを設定して結果を反映
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
