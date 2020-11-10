function memo() {
  const submit = document.getElementById("submit");
  // まず、投稿するボタンの情報を取得
  submit.addEventListener("click", (e) => {
  // ボタンの情報を取得した変数に対して、クリックした時の処理を記述
  const formData = new FormData(document.getElementById("form"));
  const XHR = new XMLHttpRequest();
  // 非同期通信を実装するために必要なオブジェクト
  // ページ全体を更新する必要なしに、データを受け取ることができます
  XHR.open("POST", "/posts", true);
  XHR.responseType = "json";
  XHR.send(formData);
  XHR.onload = () => {
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    }
    const item = XHR.response.post;
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    const HTML = `
      <div class="post" data-id=${item.id}>
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
        ${item.content}
        </div>
      </div>`;
    list.insertAdjacentHTML("afterend", HTML);
    formText.value = "";
  };
  e.preventDefault();
 });
}
window.addEventListener("load", memo);